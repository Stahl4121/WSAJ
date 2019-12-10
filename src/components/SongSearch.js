/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery';

class SongSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [{}],
      loading: false
    };

  };

  handleChange = (event) => {

    this.setState({ loading: true });

    var settings = {
      async: "true",
      crossDomain: "true",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + event.target.value,
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "f33e47e69fmshe427476175d1511p18d30djsn436f42242136"
      },
      context: this
    }

    $.ajax(settings).done(function (response) {
      if (typeof response.data !== 'undefined') {
        var newSongs = [];
        for (var i = 0; i < response.data.length; i++) {
          newSongs.push({ label: response.data[i].title + ' by ' + response.data[i].artist.name });
        }

        this.setState({ songs: newSongs, loading: false });
      }
    });

  };



  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.state.songs}
        autoComplete
        disableOpenOnFocus
        getOptionLabel={option => option.label}
        style={{ top: "auto", bottom: "auto", height:"auto", postion: "absolute" }}
        renderInput={params => (
          <TextField {...params}
            label="Song Request"
            variant="outlined"
            fullWidth
            onChange={this.handleChange}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {this.state.loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );
  }
}

export default (SongSearch);