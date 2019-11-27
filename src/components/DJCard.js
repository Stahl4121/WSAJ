import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DJCard(props) {
  const classes = useStyles();
  var linkTo = "/shows/" + props.show["ShowName"].split(' ').join('-');

  return (
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
              {props.show["ShowName"]} with {props.show["ShowHost"]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.show["ShowDescription"]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Genre: {props.show["ShowGenre"]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" >
            <Link color="primary" to={linkTo}>
              Set History
              </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
