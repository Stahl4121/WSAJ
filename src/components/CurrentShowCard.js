import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import firebase from "../firebase.js";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    paddingLeft: "4em",
    paddingRight: "4em",
    marginLeft: "2em",
    marginRight: "2em",
    marginTop: "2em",
    maxWidth: "90%"
  },
  media: {
    height: "70px",
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    paddingLeft: "4em",
    paddingRight: "4em",
    marginRight: "1em",
    width: "10em"
  },
  root: {
    flexGrow: 1
  },
  dates: {
    textAlign: "right"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  tBox: {
    "& > *": {
      margin: theme.spacing(1),
      width: 275
    }
  }
}));

export default function CurrentShowCard(dj_name) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  var docData = getDJ(dj_name);
  var name = dj_name;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    deleteDJ(dj_name);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Show Name" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Timeslot:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="requestedTimeslot"
            >
              Monday 7pm
            </Typography>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                id="studentName"
              >
                Student Name
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                id="phoneNumber"
              >
                7577443516
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                id="emailAddress"
              >
                tanmr1@gcc.edu
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dates}>
            <Typography variant="body2" color="textSecondary">
              Date of Request:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              id="dateOfRequest"
            >
              9 December 2019
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Date of Acceptance:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              id="dateOfAcceptance"
            >
              10 December 2019
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={handleOpen}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          className={classes.modal}
          onClose={handleClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <CardHeader title="WARNING" />
              <Typography id="simple-modal-description">
                Are you sure? This action can't be undone!
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                className={classes.button}
                onClick={handleYes}
              >
                YES
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={handleClose}
              >
                NO
              </Button>
            </div>
          </Fade>
        </Modal>
      </CardContent>
      <CardActions disableSpacing />
    </Card>
  );
}

function getDJ(dj_name){
  var db = firebase.database();
  var docRef = db.collection("DJ_Shows").doc(dj_name);

  docRef.get().then(function(doc) {
      if (doc.exists) {
          return doc.data();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}

function deleteDJ(dj_name) {
  var db = firebase.database();

  db.collection("DJ_Shows").doc(dj_name).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}
