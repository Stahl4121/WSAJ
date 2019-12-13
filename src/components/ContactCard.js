import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MiriamsFace from '../img/headshot.jpg';

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
      {/* <CardMedia
        className={classes.media}
        image={MiriamsFace}
        title="headshot"
      /> */}
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
