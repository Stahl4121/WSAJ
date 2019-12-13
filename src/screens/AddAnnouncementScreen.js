import React from "react";
import AnnouncementForm from '../components/AnnouncementForm.js';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
}));

export default function AddSetScreen() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Add Announcement
      </Typography>
      <Container maxWidth="sm">
        <AnnouncementForm />
      </Container>
    </div>
  );
}