//TODO: Make it so that when user clicks on an autocomplete suggestion, the field's state is saved to that suggestion
import React from "react";
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import firebase from "../firebase.js"
import $ from 'jquery';
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    marginTop: theme.spacing(1),
    width: '60%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  songs: {
    marginTop: '1em',
    padding: '1em',
  },
});



class BetterAddSetScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      songTextField: '',
      songsAdded: [],
      songsAddedComponent: [],
      songs: [],
      fields: {},
      errors: {},
      tags: [],
    }


    this.handleChange = this.handleChange.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.signUp = this.signUp.bind(this);
    this.cancel = this.cancel.bind(this);
    this.clearSongs = this.clearSongs.bind(this);
  };

  handleAutoChange = (event, values) => {
    this.setState({ songTextField: values });
  }

  addSong = () => {
    var songsList = this.state.songsAdded;
    var songs = this.state.songsAddedComponent;
    var newSong = this.state.songTextField['label'];
    console.log('songsList ' + songsList + ' songs ' + songs + ' newSong ' + newSong);

    songsList.push(newSong);
    songs.push(
      <Typography variant="body1" id="songList">
        {newSong}
      </Typography>
    );
    this.setState({ songsAddedComponent: songs, songsAdded: songsList });
  };

  handleInputChange = (event) => {
    var settings = {
      async: "true",
      crossDomain: "true",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + event.target.value,
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "f33e47e69fmshe427476175d1511p18d30djsn436f42242136"
      },
      context: this
    }
    $.ajax(settings).done(function (response) {
      if (typeof response.data !== 'undefined') {
        var newSongs = [];
        for (var i = 0; i < response.data.length; i++) {
          newSongs.push({ label: response.data[i].title + ' by ' + response.data[i].artist.name });
        }

        this.setState({ songs: newSongs, loading: false });
      }
    });

    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;

    this.setState({
      fields
    });

    this.setState({ loading: true });
  }

  componentDidMount() {
    var db = firebase.firestore();

    //Get showname from logged in user email address
    if (this.props.user) {
      //If user exists in the shows table
      db.collection("shows").where("emailAddress", "==", this.props.user.email).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc) {
              this.setState({ name: doc.data().showName })
            }
          });
        })
        .catch(function (error) {
          console.log("Error finding show name: ", error);
        });
    }
    else {
      console.log('No user logged in.');
    }
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

  signUp(e) {
    e.preventDefault();

    if (this.validateAll()) {
      // Add a new document in collection "shows"
      var db = firebase.firestore();
      db.collection('shows').doc(this.state.name.split('-').join(' ')).collection('sets').add({
        songs: this.state.songsAdded,
      })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
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
  submit = (e) => {
    var db = firebase.firestore();
    db.collection("shows").doc(this.state.name).collection("sets").add(
      { songs: this.state.songsAdded }
    )
    this.props.history.push("/shows/" + this.state.name.split(" ").join("-"));
  }
  clearSongs(e) {
    ////////////////////////////////////
    // CLEAR DATABASE  SONG REQUESTS ///
    ////////////////////////////////////
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="lg">
        <div className={classes.root}>
          <Typography className={classes.header} component="h1" variant="h5" className={classes.header}>
            Add Set
          </Typography>
          <div className={classes.form}>
            <Autocomplete
              id="combo-box-demo"
              options={this.state.songs}
              autoComplete
              disableOpenOnFocus
              getOptionLabel={option => option.label}
              onChange={this.handleAutoChange}
              style={{ top: "auto", bottom: "auto", height: "auto", postion: "absolute" }}
              renderInput={params => (
                <TextField {...params}
                  label="Song"
                  variant="outlined"
                  fullWidth
                  name="song"
                  onChange={this.handleInputChange}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {this.state.loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {/*params.InputProps.endAdornment*/}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />

            <Button
              className={classes.submit}
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              onClick={this.addSong}>
              Add Song
                      </Button>
            <Paper className={classes.songs}>
              {this.state.songsAddedComponent}
            </Paper>
            <Button className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={this.submit}
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
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles)(BetterAddSetScreen));
