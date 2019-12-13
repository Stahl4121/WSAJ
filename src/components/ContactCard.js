import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

const pictures = {
  President: require('../img/miriam.jpg'),
  "Song Master": require('../img/nate.jpg'),
  "Vice President": require('../img/sarah.jpg'),
  "Public Relations": require('../img/logan.jpg'),
};

class ContactCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      execPosition: props.execPosition,
      execName: props.execName,
      phoneNumber: props.phoneNumber,
      emailAddress: props.emailAddress,
      description: props.description,
      fields: {},
      errors: {}
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.state.execPosition}
          subheader={this.state.execName}
        />
        <CardMedia
          className={classes.media}
          image={pictures[this.state.execPosition]}
          title="headshot"
        />
        <CardContent>
          <Typography>
            <p>
              {this.state.description}
            </p>
          </Typography>
          <Typography color="textSecondary" component="p">Contact Info:</Typography>
          <Typography>
            {this.state.phoneNumber}
          </Typography>
          <Typography>
            {this.state.emailAddress}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContactCard);
