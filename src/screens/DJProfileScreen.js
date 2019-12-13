//from a sandbox tutuorial
import React from "react";
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import firebase from "../firebase.js"

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'left',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    textDecoration: 'none'
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: '4em',
    marginRight: '4em',
    marginTop: '2em',
    marginBottom: '2em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  picker: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    paddingLeft: '4em',
    paddingRight: '4em',
    margin: '1em',
    width: '10em',
  },
  songs: {
    marginTop: '1em',
    padding: '1em',
  },
});



class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {email: "",
      studentNames: "",
      djNames: "",
      timeSlot: "",
      showName: "",
      genre: "",
      description: "",
      phoneNumber: "",

    },
    errors: {
      studentNames: "",
      djNames: "",
      timeSlot: "",
      showName: "",
      genre: "",
      description: "",
      phoneNumber: "",
      login: "",
    },
    showName: "",
      songRequests: [],
      showName: "",
      loaded: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clearSongs = this.clearSongs.bind(this);
  };

  componentDidMount() {
    this.getSongRequests();
  }

  getSongRequests = () => {
    var songs = [];
    var db = firebase.firestore();
    var dbRef = db.collection("shows");
    var showName = "";

    dbRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().emailAddress === this.props.user.email) {
          var songRequests = doc.data().songRequests;
          showName = doc.data().showName;
          for (var i = 0; i < songRequests.length; i++) {
            songs.push (
                <Typography variant="body1" id="songList">
                  {songRequests[i]}
                </Typography>
            );
          }
        }
      });

      this.setState({ songRequests: songs, showName: showName })
      
      if(this.state.loaded === false){
        this.observeSongRequests();
        this.setState({ loaded: true })
      }
    });
  }

  observeSongRequests = () => {
    var db = firebase.firestore();
    var dbRef = db.collection("shows");

    dbRef.doc(this.state.showName)
    .onSnapshot((doc) => {
      this.getSongRequests();
    });
  }


  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  validateAll() {

    for (const [value] of Object.entries(this.state.errors)) {
      if (!value || value !== "") {
        return false;
      }
    }
    return true;
  }

  changeInfo(e) {
    e.preventDefault();

    if (this.validateAll()) {
      // Add a new document in collection "shows"
      var db = firebase.firestore();
      db.collection("shows").doc(this.state.showName).update({
        showName: this.state.fields["showName"],
        dj: this.state.fields["djNames"],
        description: this.state.fields["description"],
        genre: this.state.fields["genre"],
      })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      //Clear Form
      let fields = {};
      fields["showName"] = "";
      fields["djNames"] = "";
      fields["description"] = "";
      fields["genre"] = "";
      this.setState({ fields: fields });
    }

  }

  cancel(e) {
    e.preventDefault();

    //Clear Form
    //DONT save CHANGES
    let fields = {};
    fields["showName"] = "";
    fields["djNames"] = "";
    fields["description"] = "";
    fields["genre"] = "";
    this.setState({ fields: fields });
  }

  clearSongs(e) {
    console.log(this.state.showName);
    var db = firebase.firestore();
    var songRequests = [];
    db.collection("shows").doc(this.state.showName).get().then((doc) => {
        if (doc.exists) {
            console.log(songRequests);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        console.log(songRequests);
    
        db.collection('shows').doc(this.state.showName).update({
          songRequests: songRequests
        });
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  render() {
    const { classes } = this.props;
    var db = firebase.firestore();
    var showName = '';
    var djNames = '';
    var description = '';
    var genre = '';
    var timeSlot = '';
    var songRequests = '';


    return (
      <Container component="main" maxWidth="md">
        <div className={classes.root}>
          <form className={classes.form} onSubmit={this.changeInfo}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h5" className={classes.header}>
                  DJ Profile
              </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="show-name"
                  name="showName"
                  label="Show Name"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["showName"] ? false : this.state.errors["showName"] !== ""}
                  helperText={this.state.errors["showName"]}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="dj-names"
                  name="djNames"
                  label="DJ Name(s)"
                  onChange={this.handleChange}
                  error={!this.state.errors["djNames"] ? false : this.state.errors["djNames"] !== ""}
                  helperText={this.state.errors["djNames"]}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="genre"
                  name="genre"
                  label="Genre"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["genre"] ? false : this.state.errors["genre"] !== ""}
                  helperText={this.state.errors["genre"]}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["description"] ? false : this.state.errors["description"] !== ""}
                  helperText={this.state.errors["description"]}
                />
                <Button className={classes.submit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Save
                </Button>
                <Button className={classes.submit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.cancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h5" className={classes.header}>
                  Song Requests
                </Typography>
                  <Paper className={classes.songs}>
                    {this.state.songRequests}
                  </Paper>
                <Button className={classes.submit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.clearSongs}
                >
                  Clear Song Requests
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUpScreen);
