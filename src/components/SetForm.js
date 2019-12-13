import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    /*display: "flex",
    flexWrap: "wrap"*/
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  submit: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  picker: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    /*width: 200*/
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

export default function SetForm() {
  const classes = useStyles();
  const [genres, setGenres] = React.useState('');
  const [songs, setSongs] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [setName, setSetName] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState(new Date());

  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  const [selectedDay, setSelectedDay] = React.useState(new Date());

  const handleDayChange = day => {
    setSelectedDay(day);
  };

  function submitForm(event) {
    event.preventDefault();
    console.log("Set Name:", setName);
    console.log("Genres:", genres);
    console.log("Tags:", tags);
    console.log("Songs:", songs);
    console.log("Date:", selectedDay);
    console.log("Time:", selectedTime);
    // You should see email and password in console.
    // ..code to submit form to backend here...
  }

  return (
    <form
      className={classes.container}
      noValidate
      onSubmit={submitForm}
      autoComplete="off"
    >
      <div>
        <TextField
          id="set-name"
          label="Set Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          value={setName}
          onInput={ e=>setSetName(e.target.value)}
        />
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.picker}
            margin="normal"
            id="date-picker-dialog"
            label="Day of the Week"
            format="d"
            value={selectedDay}
            onChange={handleDayChange}
          />         
          <KeyboardTimePicker
            className={classes.picker}
            margin="normal"
            id="time-picker"
            label="Time of Day"
            value={selectedTime}
            onChange={handleTimeChange}
            variant="outlined"
          />
        </MuiPickersUtilsProvider>
      </div>
      <div>
        <TextField
          id="genres"
          label="Genres"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          value={genres}
          onInput={ e=>setGenres(e.target.value)}
        />
        <TextField
          id="tags"
          label="Tags"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          value={tags}
          onInput={ e=>setTags(e.target.value)}
        />
        <TextField
          id="songs"
          label="Songs"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          value={songs}
          onInput={ e=>setSongs(e.target.value)}
        />
        <Button
          className={classes.submit}
          type="submit"
          fullWidth
          large
          variant="contained"
          color="primary"
        >
          Add Set
        </Button>
      </div>
    </form>
  );
}
