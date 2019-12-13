import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
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
});

const pictures = {
  President: require('../img/miriam.jpg'),
  "Song Master": require('../img/nate.jpg'),
  "Vice President": require('../img/sarah.jpg'),
  "Public Relations": require('../img/logan.jpg'),
};

class DJCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      dj: props.djName,
      execPosition: props.execPosition,
    }
  }
  
  render() {
    const { classes } = this.props;
    var linkTo = "/shows/" + this.state.name.split(' ').join('-');
    return (
      <Card className={classes.card}>
        <CardActionArea component={Link} to={linkTo}>
          <CardMedia
            className={classes.cardMedia}
            image={pictures[this.state.execPosition]}
            title="Show Image"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hosted by {this.state.dj}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default withStyles(styles)(DJCard);
