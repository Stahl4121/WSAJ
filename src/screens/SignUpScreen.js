import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from "@material-ui/core/Grid";
import MUILink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import firebase from "../firebase.js"

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    textDecoration: 'none'
  },
  errorMsg: {
    color: 'red',
    marginTop: theme.spacing(1),
  }
});



class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: "",
        password: "",
        emailConfirm: "",
        passwordConfirm: "",
        studentNames: "",
        djNames: "",
        timeSlot: "",
        showName: "",
        genre: "",
        description: "",
        phoneNumber: "",

      },
      errors: {
        email: "",
        password: "",
        emailConfirm: "",
        passwordConfirm: "",
        studentNames: "",
        djNames: "",
        timeSlot: "",
        showName: "",
        genre: "",
        description: "",
        phoneNumber: "",
        login: "",
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.confirmMatching = this.confirmMatching.bind(this);
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
    else if (e.target.name === "password") {
      this.validatePassword();
    }
    else if (e.target.name === "emailConfirm") {
      this.confirmMatching("email");
    }
    else if (e.target.name === "passwordConfirm") {
      this.confirmMatching("password");
    }
  }

  validateAll() {
    this.validateEmail();
    this.validatePassword();
    this.confirmMatching("email");
    this.confirmMatching("password");

    for (const [value] of Object.entries(this.state.errors)) {
      var val = this.state.errors[value];
      if (val !== "") {
        return false;
      }
    }
    return true;
  }

  signUp(e) {
    if (this.validateAll()) {
      let errors = this.state.errors;
      errors['login'] = "";
      this.setState({ errors: errors });

      firebase.auth().createUserWithEmailAndPassword(this.state.fields["email"], this.state.fields["password"])
        .then(() => {

          //create dj
          var db = firebase.firestore();
          db.collection("shows").doc(this.state.fields["showName"]).set({
            confirmDate: '',
            description: this.state.fields["description"],
            dj: this.state.fields["djNames"],
            emailAddress: this.state.fields["email"],
            genre: this.state.fields["genre"],
            phoneNumber: this.state.fields["phoneNumber"],
            requestDate: Date().toString(),
            showName: this.state.fields["showName"],
            timeSlot: this.state.fields["timeSlot"],
            songRequests: [],
            studentNames: this.state.fields["studentNames"],
            status: 'requested',
          })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });

          this.props.history.push('/');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          let errors = this.state.errors;
          errors['login'] = errorMessage;
          this.setState({ errors: errors });
        });
    }
  }

  confirmMatching(fieldName) {
    let errors = this.state.errors;
    let result = this.state.fields[fieldName].localeCompare(this.state.fields[fieldName + "Confirm"]);
    let errorMsg = "";

    if (result !== 0) {
      let sentenceCase = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      errorMsg = "*" + sentenceCase + "s do not match.";
    }

    errors[fieldName + "Confirm"] = errorMsg;

    this.setState({
      errors: errors
    });
  }

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

  validatePassword() {
    let errors = this.state.errors;
    let password = this.state.fields["password"];
    let errorMsg = "";

    if (!password || password === "") {
      errorMsg = "*Please enter your password.";
    }
    else if (typeof password !== "undefined") {
      if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/)) {
        errorMsg = "*Password fails the following requirements: ";

        if (!password.match(/^.{8,}$/)) {
          errorMsg += "a minimum of 8 characters";
        }
        if (!password.match(/\d/)) {
          errorMsg += ", a number";
        }
        if (!password.match(/[a-z]/)) {
          errorMsg += ", a lowercase letter";
        }
        if (!password.match(/[A-Z]/)) {
          errorMsg += ", an uppercase letter";
        }
        if (!password.match(/\W/)) {
          errorMsg += ", a special character (e.g. !@#$%^&*)";
        }

        //Fix potentially ugly string syntax
        errorMsg = errorMsg.replace(": ,", ":");
      }
    }

    errors["password"] = errorMsg;

    this.setState({
      errors: errors
    });

    return (errorMsg === "" ? true : false);
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.props.history.push('/login');
    }).catch((error) => {
      // An error happened
    });
  }

  render() {
    const { classes } = this.props;

    if (this.props.auth !== "") {
      return (
        <Container component="main" maxWidth="xs">
          <div className={classes.root}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.header}>
              You're already signed in!
          </Typography>
            <Button className={classes.submit}
              onClick={(e) => this.logout(e)}
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Out
            </Button>
          </div>
        </Container>
      )
    }
    else {
      return (
        <Container component="main" maxWidth="xs">
          <div className={classes.root}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.header}>
              DJ Account Request
          </Typography>
            <Typography component="h6" className={classes.errorMsg} >
              {this.state.errors["login"]}
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="show-name"
                name="showName"
                label="Show Name"
                autoFocus
                onChange={this.handleChange}
                error={!this.state.errors["showName"] ? false : this.state.errors["showName"] !== ""}
                helperText={this.state.errors["showName"]}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="student-name"
                label="Student Name(s)"
                onChange={this.handleChange}
                error={!this.state.errors["studentNames"] ? false : this.state.errors["studentNames"] !== ""}
                helperText={this.state.errors["studentNames"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="dj-names"
                name="djNames"
                label="DJ Name(s)"
                onChange={this.handleChange}
                error={!this.state.errors["djNames"] ? false : this.state.errors["djNames"] !== ""}
                helperText={this.state.errors["djNames"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="genre"
                name="genre"
                label="Genre(s)"
                onChange={this.handleChange}
                error={!this.state.errors["genre"] ? false : this.state.errors["genre"] !== ""}
                helperText={this.state.errors["genre"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="timeSlot"
                name="timeSlot"
                label="Time Slot (Day of Week and Hour of Day)"
                onChange={this.handleChange}
                error={!this.state.errors["timeSlot"] ? false : this.state.errors["timeSlot"] !== ""}
                helperText={this.state.errors["timeSlot"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                id="description"
                name="description"
                label="Description"
                onChange={this.handleChange}
                error={!this.state.errors["description"] ? false : this.state.errors["description"] !== ""}
                helperText={this.state.errors["description"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number (XXX)XXX-XXXX"
                onChange={this.handleChange}
                error={!this.state.errors["phoneNumber"] ? false : this.state.errors["phoneNumber"] !== ""}
                helperText={this.state.errors["phoneNumber"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                onChange={this.handleChange}
                error={!this.state.errors["email"] ? false : this.state.errors["email"] !== ""}
                helperText={this.state.errors["email"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="emailConfirm"
                name="emailConfirm"
                label="Confirm Email Address"
                onChange={this.handleChange}
                error={!this.state.errors["emailConfirm"] ? false : this.state.errors["emailConfirm"] !== ""}
                helperText={this.state.errors["emailConfirm"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handleChange}
                error={!this.state.errors["password"] ? false : this.state.errors["password"] !== ""}
                helperText={this.state.errors["password"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
                onChange={this.handleChange}
                error={!this.state.errors["passwordConfirm"] ? false : this.state.errors["passwordConfirm"] !== ""}
                helperText={this.state.errors["passwordConfirm"]}
              />
              <Button className={classes.submit}
                onClick={(e) => this.signUp(e)}
                fullWidth
                variant="contained"
                color="primary"
              >
                Request Account
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='/forgot' className={classes.links}>
                    <MUILink variant="body2" component={'span'}>
                      Forgot password?
                </MUILink>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/login' className={classes.links}>
                    <MUILink variant="body2" component={'span'}>
                      Already have an account? Sign In
                </MUILink>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
    }
  }
}

export default withRouter(withStyles(styles)(SignUpScreen));
