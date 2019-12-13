import React from "react";
import firebase from "../firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MiriamsFace from '../img/miriam.jpg';
import LogansFace from '../img/logan.jpg';
import SarahsFace from '../img/sarah.jpg';
import NatesFace from '../img/nate.jpg';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 250,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    paddingLeft: "4em",
    paddingRight: "4em",
    marginRight: "1em",
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
    justifyContent: "center",
    border: "none",
  },
  cardActions: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
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

  var linkTo = "/admin/current-shows/" + showName.split(' ').join('-');

  function deleteDJ() {
    var db = firebase.firestore();
    db.collection("shows").doc(props.showName).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    //location.reload(); 
  }

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
      <CardActionArea component={Link} to={linkTo}>
        <CardMedia
          className={classes.cardMedia}
          image={MiriamsFace}
          title="Show Image"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {showName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Timeslot: {timeslot}
          </Typography>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="studentName">
              {djName}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              id="phoneNumber">
              {phoneNum}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              id="emailAddress">
              {email}
            </Typography>
          </div>
          
        </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            fullWidth
            large
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleOpen}>
            Remove
        </Button>
        </CardActions>
        <CardContent className={classes.cardContent}>
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
                  color="primary"
                  type="submit"
                  className={classes.button}
                  onClick={handleYes}>
                  YES
              </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={handleClose}>
                  NO
              </Button>
              </div>
            </Fade>
          </Modal>
        </CardContent>
        <CardActions disableSpacing />
    </Card >
  );
}


