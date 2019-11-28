import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  picker: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default function MultilineTextFields() {
  const classes = useStyles();
  const [selectedTime, setSelectedTime] = React.useState(new Date());

  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  const [selectedDay, setSelectedDay] = React.useState(new Date());

  const handleDayChange = day => {
    setSelectedDay(day);
  };

  const [phoneNumber, setPhoneNumber] = React.useState({
    textmask: "(1  )    -    ",
    numberformat: "1320"
  });

  const handlePhoneNumChange = name => event => {
    setPhoneNumber({
      ...phoneNumber,
      [name]: event.target.value
    });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="show-name"
          label="Show Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
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
          id="first-name"
          label="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="last-name"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="dj-name"
          label="DJ Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="email"
          label="School Email Address"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="phone-number-mask-input">
            Phone Number
          </InputLabel>
          <Input
            value={phoneNumber.textmask}
            onChange={handlePhoneNumChange("textmask")}
            id="phone-number-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
      </div>
    </form>
  );
}
