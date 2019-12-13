import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import firebase from "../firebase.js"
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '25px',
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paperholder: {
    opacity: '0.85',
    borderRadius: '25px',
    paddingBottom: '4em',
  },
  buttonHolder: {
    paddingTop: '1.5em',
    marginLeft: "auto",
    marginRight: "-22",
    alignContent: 'right',
  },
  announcementContent: {
    backgroundColor: theme.palette.background.paper,
    padding: '.25em',
    borderRadius: '25px',
  },
  button: {
    paddingLeft: '4em',
    paddingRight: '4em',
    marginRight: '1em',
  },
}));

export default function AdminPaperSheet(props) {
  const classes = useStyles();
  var title=props.title;
  var date=props.date;
  var announcement=props.announcement;

  function deleteAnnouncment() {
    var db = firebase.firestore();
    console.log("announcement is: ", props.date);
    db.collection("announcements").doc(props.date).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paperholder}>
        <Toolbar>
          <span className={classes.buttonHolder}>
            <IconButton aria-label="delete" variant="outlined" color="primary" onClick={deleteAnnouncment} className={classes.button}>
              <DeleteIcon fontSize="large"/>
            </IconButton>
          </span>
        </Toolbar>
        
        <div className={classes.announcementContent}>
          
          <Container maxWidth="sm">
            
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              {date}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              {announcement}
            </Typography>
          </Container>          
        </div>
      </Paper>
    </div>
  );
}