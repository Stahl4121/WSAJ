import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <Grid container spacing={2} /*justify="center"*/
  direction="row"
  justify="space-around"
  alignItems="center">
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Request a song"
                  onChange={this.autofill}
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" fullWidth>
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
