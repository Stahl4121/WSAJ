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
import Typography from '@material-ui/core/Typography';

/*const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  description: {
    //height: 50,
  }
});*/
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
  var linkTo = "/shows/" + props.show["ShowName"].split(' ').join('-');

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea component={Link} to={linkTo}>
        <CardMedia
          className={classes.cardMedia}
          image="../img/headshot.jpg"
          title="Show Image"
        />
        <CardContent className={classes.cardContent}>
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
        <CardActions>
          <TextField
            variant="outlined"
            margin="normal"
            name="songrequest"
            fullWidth
            label="Song Request"
            id="songrquest"
            autoComplete="current-password"
          />
          {/*<Button className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Request
            </Button>*/}
        </CardActions>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={linkTo}>
            Set History
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}
