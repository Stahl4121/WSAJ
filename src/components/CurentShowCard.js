import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
    width: '10em',
  },
  root: {
    flexGrow: 1,
  },
  dates: {
    textAlign: 'right',
  },
}));

export default function CurrentShowCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Show Name"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Timeslot: 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" id="requestedTimeslot">
              Monday 7pm
            </Typography>
            <div>
              <Typography variant="body2" color="textSecondary" component="p" id="studentName">
                Student Name
              </Typography>
              <Typography variant="body2" color="textSecondary" id="phoneNumber">
                7577443516
              </Typography>
              <Typography variant="body2" color="textSecondary" id="emailAddress">
                tanmr1@gcc.edu
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.dates}>
              <Typography variant="body2" color="textSecondary">
                  Date of Request:
              </Typography>
              <Typography variant="body2" color="textSecondary" id="dateOfRequest">
                  9 December 2019
              </Typography>
              <Typography variant="body2" color="textSecondary">
                  Date of Acceptance:
              </Typography>
              <Typography variant="body2" color="textSecondary" id="dateOfAcceptance">
                  10 December 2019
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="secondary" className={classes.button}>
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        
      </CardActions>        
    </Card>
  );
}
