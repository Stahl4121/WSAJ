import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DJSets from '../screens/DJSetsScreen.js';
import { Link, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import DJShows from '../data/DJShows.json';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DJCard() {
  const classes = useStyles();
  //var data = JSON.parse(DJShows);
  //var shows = data["Shows"];
  var shows = DJShows["Shows"];
  console.log(shows);
  console.log('um hello?????????');
  return (
    <div>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="headshot.jpg"
              title="MRM Headshot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                DJ MRM
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                DJ MRM delights her listeners by offering listening choices that encourage the listener to delve into stages of derealization and decathect.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" to="/shows/sets" component={Link}>
              Set History
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="headshot.jpg"
              title="MRM Headshot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                DJ SARAH
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                DJ SARAH continues the decathexis with dissociative jams to get you through your onerous meetings.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" to="/shows/sets" component={Link}>
              Set History
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Route exact={true} path="/shows/sets" component={DJSets}/>
      </div>
    </div>

  );
}
