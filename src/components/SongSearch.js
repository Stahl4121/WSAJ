/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import $ from 'jquery';
var songs = [];

class SongSearch extends React.Component {
  handleOnChange = event => {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + event.target.value,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "f33e47e69fmshe427476175d1511p18d30djsn436f42242136"
      }
    }
    var suggestions = [];
    $.ajax(settings).done(function (response) {
      if (typeof response.data !== 'undefined') {
        var newSongs = [];
        for (var i = 0; i < response.data.length; i++) {
          newSongs.push({ label: response.data[i].title + ' by ' + response.data[i].artist.name });
        }
        songs = newSongs;
      }
    });
  };
  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={songs}
        getOptionLabel={option => option.title}
        //style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params}
            label="Song Request"
            variant="outlined"
            fullWidth
            onKeyPress={this.handleOnChange}/>
        )}
      />
    );
  }
}
export default (SongSearch);