import React from "react";
import firebase from "../firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

export default function CurrentShowCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  var showName = props.showName;
  var timeslot = props.timeslot;
  var djName = props.djNames;
  var phoneNum = props.phoneNum
  var email = props.email;
  var requestDate = props.requestDate;
  var acceptanceDate = props.acceptanceDate;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    deleteDJ(djName);
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
      <CardHeader title={showName} />
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
              {timeslot}
            </Typography>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                id="studentName"
              >
                {djName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                id="phoneNumber"
              >
                {phoneNum}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                id="emailAddress"
              >
                {email}
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
              {requestDate}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Date of Acceptance:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              id="dateOfAcceptance"
            >
              {acceptanceDate}
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

function deleteDJ(djName) {
  var db = firebase.database();

  db.collection("shows").doc(djName).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}
