import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '25px',
  },
  paperholder: {
    opacity: '0.85',
    borderRadius: '115px',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 2, 8),
  },
  card: {
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  var title=props.title;
  var date=props.date;
  var announcement=props.announcement;
  return (
    <div className={classes.root}>
      <Paper className={classes.paperholder}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              {date}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              {announcement}
            </Typography>
          </Container>
        </div>
      </Paper>

    </div>
  );
}