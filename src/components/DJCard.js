import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import MiriamsFace from '../img/headshot.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
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
}));

export default function DJCard(props) {
  const classes = useStyles();
  var name = props.show;
  var dj = props.dj;
  console.log('show ' + props.show)
  var linkTo = "/shows/" + name.split(' ').join('-');
  
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
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hosted by DJ DJ
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
