import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

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
    return(
      <div alignItems={'center'}>
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
export default (SongRequest);
