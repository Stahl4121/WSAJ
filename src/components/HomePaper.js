import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from '../img/home91-1.png';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: 'white',
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },

}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper >
            <Typography variant="h5" component="h3">
                Announcements
            </Typography>
            <Typography component="p">
                Check out the other tabs:)
            </Typography>
        </Paper>
    </div>
  );
}