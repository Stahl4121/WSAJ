import React from 'react';
import Typography from '@material-ui/core/Typography';
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
      <div>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Request a Song
        </Typography>
        <TextField
          align="center"
          justify="center"
          variant="outlined"
          margin="normal"
          label="Song Request"
          onChange={this.autofill}
        />
      </div>
    );
  }
}
export default (SongRequest);
