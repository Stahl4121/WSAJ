import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SongSearch from './SongSearch.js';
import firebase from "../firebase.js";

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  button: {
    height: "3.6em",
    width: "8em",
  },
});
class SongRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: {},
      songRequest: "",
      suggestions: {},
      msg: []
    }
    this.autofill = this.autofill.bind(this);
    this.getSong = this.getSong.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  
  getSong(_State){
    const songString = _State.songString;
		this.setState(
			{
				songRequest: songString
			},
			() => {
				//console.log(this.state.songRequest);
			}
    );
  }

  handleClick(){
    console.log(this.state.songRequest['label']);
    console.log(this.props.showName);
    var db = firebase.firestore();
    var songRequests = [];
    db.collection("shows").doc(this.props.showName).get().then((doc) => {
        if (doc.exists) {
            songRequests = doc.data().songRequests
            console.log(songRequests);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        console.log(songRequests);

        songRequests.push(this.state.songRequest['label']);
        console.log(songRequests);
    
        db.collection('shows').doc(this.props.showName).update({
          songRequests: songRequests
        });

      this.setState({msg: [<Typography>Song Request Sent!</Typography>]})
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  autofill(e) {

  };
  render() {
    const { classes } = this.props;
    return (

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Grid container spacing={2}
              direction="row"
              justify="space-around"
              alignItems="center">
              <Grid item xs={10}>
                <SongSearch
                  getSong={this.getSong}
                />
              </Grid>
              <Grid item xs={2}
              >
                <Button 
                  variant="contained"
                  size="large" 
                  color="primary" 
                  fullWidth
                  onClick={this.handleClick}
                  className={classes.button}>
                  Submit
                  </Button>
              </Grid>
            </Grid>
            {this.state.msg}
          </div>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(SongRequest);
