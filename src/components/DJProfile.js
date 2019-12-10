// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
//
// const Profile = ({ displayName = "Unknown" }) => (
//   <Typography>
//     My name is <b>{displayName}</b>
//   </Typography>
// );

// export default Profile;


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
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
    margin: '1em',
    padding: '1em',
  },
  songHeader: {
    margin: '0.7em',
  }
}));

export default function DJProfile({songList = "unknown", nameOfShow ="showName"}) {
  const classes = useStyles();
  const [showName, setShowName] = React.useState('Midnight Music');  
  const [djHosts, setDJHosts] = React.useState('DJ MRM');
  const [genre, setGenre] = React.useState('screamo');
  const [description, setDescription] = React.useState('A lyric midnight hour of your favorite screamo ever. Yay!');
  

  function submitForm(event) {
    event.preventDefault();
    console.log( 'Show Name:', showName); 
    console.log( 'DJ Hosts:', djHosts);
    console.log( 'Genre:', genre); 
    console.log( 'Description:', description);
    // You should see email and password in console.
    // ..code to submit form to backend here...

    }
  
  return (
    <form className={classes.container} noValidate onSubmit={submitForm} autoComplete="off">
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                id="show-name"
                label="Show Name"
                fullWidth={true}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={showName}
                onInput={ e=>setShowName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="first-name"
                label="DJ Hosts"
                className={classes.textField}
                margin="normal"
                fullWidth={true}
                variant="outlined"
                value={djHosts}
                onInput={ e=>setDJHosts(e.target.value)}
              />
              <TextField
                id="genre"
                label="Genre"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                value={genre}
                onInput={ e=>setGenre(e.target.value)}
              />
              <TextField
                id="dj-name"
                label="Description"
                className={classes.textField}
                multiline
                fullWidth={true}
                rowsMax="10"
                margin="normal"
                variant="outlined"
                value={description}
                onInput={ e=>setDescription(e.target.value)}
              />
              <Button variant="outlined" color="primary" className={classes.button}>
                Save
              </Button>
              <Button variant="outlined" color="secondary" className={classes.button}>
                Cancel
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" id="phoneNumber" className={classes.songHeader}>
                Song Requests
            </Typography>
            <Paper className={classes.songs}>
              <Typography variant="body1" id="phoneNumber">
                <b>{songList}</b>
              </Typography>
            </Paper>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Clear
            </Button>
          </Grid>
          
      </Grid>
    </form>
  );
}

