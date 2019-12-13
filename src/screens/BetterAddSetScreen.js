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
import SongRequest from "../components/SongRequest.js";
import SongSearch from "../components/SongSearch.js";
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
  songHeader: {
    marginLeft: '1em',
  },
  songBox: {
    opacity: '0.85',
    marginLeft: "2.2em",
  }
});



class BetterAddSetScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      songs: [],
      fields: {},
      errors: {}
    }


    this.handleChange = this.handleChange.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.signUp = this.signUp.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clearSongs = this.clearSongs.bind(this);
  };

  componentDidMount() {
    var db = firebase.firestore();

    //Set state auth based on user
    if (this.props.user) {
      //If user exists in the adminAccounts table
      db.collection("shows").where("emailAddress", "==", this.props.user.email).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(doc){
              this.setState({name: doc.data().showName})
            }
          });
        })
        .catch(function (error) {
          console.log("Error verifying admin status: ", error);
        });
    }
    else{
      console.log('this is bad');
    }
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  validateAll(){
    
    for (const [value] of Object.entries(this.state.errors)) {
      if (!value || value !== ""){
        return false;
      }
    }
    return true;
  }

  signUp(e) {
    e.preventDefault();

    if (this.validateAll()) {
      // Add a new document in collection "shows"
      var db = firebase.firestore();
      db.collection('shows').doc(this.state.name.split('-').join(' ')).collection('sets').add({
        songs: this.state.songs,
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
      //Clear Form
      let fields = {};
      fields["setName"] = "";
      fields["tags"] = "";
      fields["description"] = "";
      fields["songs"] = "";
      this.setState({ fields: fields });
    }

  }

  cancel(e) {
    e.preventDefault();
    
    //Clear Form
    //DONT save CHANGES
    let fields = {};
    fields["setName"] = "";
    fields["tags"] = "";
    fields["description"] = "";
    fields["songs"] = "";
    this.setState({ fields: fields });
  }

  clearSongs(e) {
    ////////////////////////////////////
    // CLEAR DATABASE  SONG REQUESTS ///
    ////////////////////////////////////
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
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Add Set
          </Typography>
          <form className={classes.form} onSubmit={this.signUp}>
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
                  id="set-name"
                  name="setName"
                  label="Set Name"
                  onChange={this.handleChange}
                  error={!this.state.errors["setName"] ? false : this.state.errors["setName"] !== ""}
                  helperText={this.state.errors["setName"]}
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
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="tags"
                  name="tags"
                  label="Tags"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["tags"] ? false : this.state.errors["tags"] !== ""}
                  helperText={this.state.errors["tags"]}
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
                <Typography component="h1" variant="h5" className={classes.songHeader}>
                  Songs
                </Typography>
                <Grid container spacing={2}
                  direction="row"
                  justify="space-around"
                  alignItems="center">
                  <Grid item xs={10}>
                    <SongSearch/>
                  </Grid>
                  <Grid item xs={2}>
                    <Button 
                      variant="contained"
                      size="large" 
                      color="primary" 
                      fullWidth
                      className={classes.button}
                      onClick={this.addSong}>
                      Add Song
                      </Button>
                  </Grid>
                </Grid>
                <Paper className={classes.songBox}>
                  <div className={classes.announcement}>
                    <Typography component="p">
                      {this.state.songs}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(BetterAddSetScreen);
