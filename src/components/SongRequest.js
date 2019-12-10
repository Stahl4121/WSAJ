import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SongSearch from './SongSearch.js';

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  button: {
    height: "3.6em",
    width: "8em",
  },
});
class SongRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: {},
      suggestions: {}
    }
    this.autofill = this.autofill.bind(this);
  };

  autofill(e) {

  };
  render() {
    const { classes } = this.props;
    return (

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Grid container spacing={2}
              direction="row"
              justify="space-around"
              alignItems="center">
              <Grid item xs={10}>
                <SongSearch/>
              </Grid>
              <Grid item xs={2}
              >
                <Button 
                  variant="contained"
                  size="large" 
                  color="primary" 
                  fullWidth
                  className={classes.button}>
                  Submit
                  </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(SongRequest);
