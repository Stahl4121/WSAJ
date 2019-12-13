// //from a sandbox tutuorial
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import {
//   KeyboardTimePicker,
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import PropTypes from "prop-types";
// import MaskedInput from "react-text-mask";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   },
//   picker: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   },
//   menu: {
//     width: 200
//   },
//   formControl: {
//     margin: theme.spacing(1)
//   }
// });

// class ShowRequestScreen extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }
  
//       this.handleChange = this.handleChange.bind(this);
//       this.validateEmail = this.validateEmail.bind(this);
//       this.validateAll = this.validateAll.bind(this);
//       this.signUp = this.signUp.bind(this);
//     };
  
//     handleChange(e) {
//       let fields = this.state.fields;
//       fields[e.target.name] = e.target.value;
  
//       this.setState({
//         fields
//       });
  
//       if (e.target.name === "email") {
//         this.validateEmail();
//       }
//     }
  
//     validateAll(){
//       this.validateEmail();
  
//       for (const [value] of Object.entries(this.state.errors)) {
//         if (!value || value !== ""){
//           return false;
//         }
//       }
//       return true;
//     }
  
//     signUp(e) {
//       e.preventDefault();
//       if (this.validateAll()) {
//         //TODO: User Authentication 
  
//         //Clear Form
//         let fields = {};
//         fields["email"] = "";
//         this.setState({ fields: fields });
//       }
  
//     }

//     validateEmail() {
//         let errors = this.state.errors;
//         let email = this.state.fields["email"];
//         let errorMsg = "";
    
//         if (!email || email === "") {
//           errorMsg = "*Please enter your email.";
//         }
//         else if (typeof email !== "undefined") {
//           //regular expression for email validation
//           var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//           if (!pattern.test(email)) {
//             errorMsg = "*Please enter a valid email.";
//           }
//         }
//         errors["email"] = errorMsg;
    
//         this.setState({
//           errors: errors
//         });
    
//         return (errorMsg === "" ? true : false);
//       }
    

//   TextMaskCustom(props) {
//     const { inputRef, ...other } = props;

//     return (
//         <MaskedInput
//         {...other}
//         ref={ref => {
//             inputRef(ref ? ref.inputElement : null);
//         }}
//         mask={[
//             "(",
//             /[1-9]/,
//             /\d/,
//             /\d/,
//             ")",
//             " ",
//             /\d/,
//             /\d/,
//             /\d/,
//             "-",
//             /\d/,
//             /\d/,
//             /\d/,
//             /\d/
//         ]}
//         placeholderChar={"\u2000"}
//         showMask
//         />
//       );
//     }

//   const [selectedTime, setSelectedTime] = React.useState(new Date());

//   const handleTimeChange = time => {
//     setSelectedTime(time);
//   };

//   const [selectedDay, setSelectedDay] = React.useState(new Date());

//   const handleDayChange = day => {
//     setSelectedDay(day);
//   };

//   const [phoneNumber, setPhoneNumber] = React.useState({
//     textmask: "(1  )    -    ",
//     numberformat: "1320"
//   });

//   const handlePhoneNumChange = name => event => {
//     setPhoneNumber({
//       ...phoneNumber,
//       [name]: event.target.value
//     });
//   };
// }
//   render() {
//     const { classes } = this.props;

//     return (
      
//         <form className={classes.container} noValidate autoComplete="off">
//         <div>
//             <TextField
//             id="show-name"
//             label="Show Name"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             />
//         </div>
//         <div>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker
//                 className={classes.picker}
//                 margin="normal"
//                 id="date-picker-dialog"
//                 label="Day of the Week"
//                 format="d"
//                 value={selectedDay}
//                 onChange={handleDayChange}
//             />
//             <KeyboardTimePicker
//                 className={classes.picker}
//                 margin="normal"
//                 id="time-picker"
//                 label="Time of Day"
//                 value={selectedTime}
//                 onChange={handleTimeChange}
//                 variant="outlined"
//             />
//             </MuiPickersUtilsProvider>
//         </div>
//         <div>
//             <TextField
//             id="first-name"
//             label="First Name"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             />
//             <TextField
//             id="last-name"
//             label="Last Name"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             />
//             <TextField
//             id="dj-name"
//             label="DJ Name"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             />
//         </div>
//         <div>
//             <TextField
//             id="email"
//             label="School Email Address"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//             />
//             <FormControl className={classes.formControl}>
//             <InputLabel htmlFor="phone-number-mask-input">
//                 Phone Number
//             </InputLabel>
//             <Input
//                 value={phoneNumber.textmask}
//                 onChange={handlePhoneNumChange("textmask")}
//                 id="phone-number-mask-input"
//                 inputComponent={TextMaskCustom}
//             />
//             </FormControl>
//         </div>
//         <div>
//             <Button className={classes.submit}
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//             >
//               Request Account
//             </Button>
//         </div>
//         </form>
//     );
//  }

//  export default withStyles(styles)(ShowRequestScreen);
