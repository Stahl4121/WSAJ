import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  card: {
    paddingLeft: '4em',
    paddingRight: '4em',
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: '2em',
    maxWidth: '90%',
  },
  media: {
    height: '70px',
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
  button: {
    paddingLeft: '4em',
    paddingRight: '4em',
    marginRight: '1em',
  },
  root: {
    flexGrow: 1,
  },
  dates: {
    textAlign: 'right',
  },
}));

export default function ShowRequestCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  var name = props.name;
  var time = props.time;
  var dj = props.dj;
  var email = props.email;
  var phone = props.phone;
  var date = props.date;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          DJ: {dj}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Requested Timeslot: {time}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="requestedTimeslot">
          Date of Request: {date}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="requestedTimeslot">
          Phone Number: {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Approve
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Deny
        </Button>
      </CardActions>
    </Card>
  );
}
