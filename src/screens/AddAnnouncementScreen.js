import React from "react";
import AnnouncementForm from '../components/AnnouncementForm.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
}));

export default function AddSetScreen() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Add Announcement
      </Typography>
      <Container maxWidth="sm">
        <AnnouncementForm />
      </Container>
    </div>
  );
}

import React from "react";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from "@material-ui/core/Grid";
import MUILink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import firebase from "../firebase.js"

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
});



class AddAnnouncementScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        announcement: "",
        date: "",
        title: "",
      },
      errors: {
        announcement: "",
        date: "",
        title: "",
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.addAnnouncement = this.addAnnouncement.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  validateAll() {
    for (const [value] of Object.entries(this.state.errors)) {
      var val = this.state.errors[value];
      if (val !== "") {
        return false;
      }
    }
    return true;
  }

  addAnnouncement() {
    //create announcement
    var db = firebase.firestore();
    db.collection("announcements").doc(this.state.fields["date"]).set({
      announcement: this.state.fields["announcement"],
      date: this.state.fields["timeSlot"],
      title: this.state.fields["title"],
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    
    //Clear Form
    let fields = {};
    fields["announcement"] = "";
    fields["date"] = "";
    fields["title"] = "";

    this.setState({ fields: fields });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Typography component="h1" variant="h5" className={classes.header}>
            Add Announcement
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="announcement"
              name="announcement"
              label="Announcement"
              autoFocus
              onChange={this.handleChange}
              error={!this.state.errors["announcement"] ? false : this.state.errors["announcement"] !== ""}
              helperText={this.state.errors["announcement"]}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              name="title"
              label="Title"
              onChange={this.handleChange}
              error={!this.state.errors["title"] ? false : this.state.errors["title"] !== ""}
              helperText={this.state.errors["title"]}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="date"
              name="date"
              label="Date (MM.DD.YYYY)"
              onChange={this.handleChange}
              error={!this.state.errors["date"] ? false : this.state.errors["date"] !== ""}
              helperText={this.state.errors["date"]}
            />
            <Button className={classes.submit}
              onClick={this.addAnnouncement}
              fullWidth
              variant="contained"
              color="primary"
            >
              Add Announcement
          </Button>
          </form>
        </div>
      </Container>
    );
    
  }
}

export default withStyles(styles)(AddAnnouncementScreen);
