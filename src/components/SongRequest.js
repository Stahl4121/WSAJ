import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
    return(
      <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Request a Song
        </Typography>
        <TextField
          align="center"
          justify="center"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Song Request"
          onChange={this.autofill}
        />
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(SongRequest);
