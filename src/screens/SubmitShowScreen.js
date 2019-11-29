import React from "react";
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
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
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
  },
  form: {
      marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SubmitShowScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          selectedTime: React.useState(new Date()),
          setSelectedTime: React.useState(new Date()),
          selectedDay: React.useState(new Date()),
          setSelectedDay: React.useState(new Date()),
          phoneNumber: React.useState({
            textmask: "(1  )    -    ",
            numberformat: "1320"
          }), 
          setPhoneNumber: React.useState({
            textmask: "(1  )    -    ",
            numberformat: "1320"
          })
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleDay = this.handleDay.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.signUp = this.signUp.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
    
        this.setState({
          fields
        });
    
        if (e.target.name === "email") {
          this.validateEmail();
        }
        else if (e.target.name === "day") {
          this.handleDay();
        }
        else if (e.target.name === "time") {
          this.handleTime();
        }
        else if (e.target.name === "phonenumber") {
          this.handlePhoneNumber("textmask");
        }
    }

    handleTime() {
      setSelectedTime(time);
    };


    handleDay() {
      setSelectedDay(day);
    };

    handlePhoneNumber() {
      setPhoneNumber({
        ...phoneNumber,
        [name]: event.target.value
      });
    };

    validateEmail() {
        let errors = this.state.errors;
        let email = this.state.fields["email"];
        let errorMsg = "";
    
        if (!email || email === "") {
          errorMsg = "*Please enter your email.";
        }
        else if (typeof email !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(email)) {
            errorMsg = "*Please enter a valid email.";
          }
        }
        errors["email"] = errorMsg;
    
        this.setState({
          errors: errors
        });
    
        return (errorMsg === "" ? true : false);
    }

    signUp(e) {
        e.preventDefault();
        if (this.validateAll()) {
          //TODO: User Authentication 
    
          //Clear Form
          let fields = {};
          fields["email"] = "";
          this.setState({ fields: fields });
        }
    
    }

    TextMaskCustom(props) {
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

    render() {
        const { classes } = this.props;
        
        return (
            <form className={classes.container} onSubmit={this.signUp} autoComplete="off">
                <div>
                    <TextField
                    required
                    id="show-name"
                    label="Show Name"
                    name="showName"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    error={!this.state.errors["showName"] ? false : this.state.errors["showName"] !== ""}
                    helperText={this.state.errors["showName"]}
                    />
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker className={classes.picker}
                        required
                        margin="normal"
                        id="date-picker-dialog"
                        label="Day of the Week"
                        name="day"
                        format="d"
                        value={selectedDay}
                        onChange={this.handleChange}
                        error={!this.state.errors["day"] ? false : this.state.errors["day"] !== ""}
                        helperText={this.state.errors["day"]}
                    />
                    <KeyboardTimePicker className={classes.picker}
                        required
                        margin="normal"
                        id="time-picker"
                        label="Time of Day"
                        name="time"
                        value={selectedTime}
                        variant="outlined"
                        onChange={this.handleChange}
                        error={!this.state.errors["time"] ? false : this.state.errors["time"] !== ""}
                        helperText={this.state.errors["time"]}
                    />
                    </MuiPickersUtilsProvider>
                </div>
                <div>
                    <TextField
                    required
                    id="first-name"
                    label="First Name"
                    name="fName"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    error={!this.state.errors["fName"] ? false : this.state.errors["fName"] !== ""}
                    helperText={this.state.errors["fName"]}
                    />
                    <TextField
                    required
                    id="last-name"
                    label="Last Name"
                    name="lName"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    error={!this.state.errors["lName"] ? false : this.state.errors["lName"] !== ""}
                    helperText={this.state.errors["lName"]}
                    />
                    <TextField
                    required
                    id="dj-names"
                    label="DJ Names"
                    name="djNames"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    error={!this.state.errors["djNames"] ? false : this.state.errors["djNames"] !== ""}
                    helperText={this.state.errors["djNames"]}
                    />
                </div>
                <div>
                    <TextField
                    required
                    id="email"
                    name="email"
                    label="School Email Address"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    error={!this.state.errors["email"] ? false : this.state.errors["email"] !== ""}
                    helperText={this.state.errors["email"]}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="phone-number-mask-input">
                            Phone Number
                        </InputLabel>
                        <Input
                            required
                            value={phoneNumber.textmask}
                            id="phone-number-mask-input"
                            name="phonenumber"
                            inputComponent={TextMaskCustom}
                            onChange={this.handleChange}
                            error={!this.state.errors["phonenumber"] ? false : this.state.errors["phonenumber"] !== ""}
                            helperText={this.state.errors["phonenumber"]}
                        />
                    </FormControl>
                    <Button className={classes.submit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        >
                        Submit Show
                    </Button>
                </div>
                </form>

        );
    }

}

export default withStyles(styles)(SubmitShowScreen);