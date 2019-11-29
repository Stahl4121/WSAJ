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
import Button from "@material-ui/core/Button";

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
  const [email, setEmail] = React.useState('');
  const [showName, setShowName] = React.useState('');  
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [djName, setDJName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [fName, setFName] = React.useState('');
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

  function submitForm(event) {
    event.preventDefault();
    console.log( 'Email:', email); 
    console.log( 'PhoneNumber:', phoneNumber); 
    console.log( 'Show Name:', showName); 
    console.log( 'First Name:', fName); 
    console.log( 'Last Name:', lName); 
    console.log( 'DJ Names:', djName); 
    console.log( 'Date:', selectedDay); 
    console.log( 'Time:', selectedTime); 
    // You should see email and password in console.
    // ..code to submit form to backend here...

    }
  
  return (
    <form className={classes.container} noValidate onSubmit={submitForm} autoComplete="off">
      <div>
        <TextField
          id="show-name"
          label="Show Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={showName}
          onInput={ e=>setShowName(e.target.value)}
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
          value={fName}
          onInput={ e=>setFName(e.target.value)}
        />
        <TextField
          id="last-name"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={lName}
          onInput={ e=>setLName(e.target.value)}
        />
        <TextField
          id="dj-name"
          label="DJ Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={djName}
          onInput={ e=>setDJName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="email"
          label="School Email Address"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={email}
          onInput={ e=>setEmail(e.target.value)}
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
      <Button className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Send Show Request
      </Button>
    </form>
  );
}
