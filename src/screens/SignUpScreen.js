//from a sandbox tutuorial
import React from "react";
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


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
});

class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });

    if (e.target.name === "email") {
      this.validateEmail()
    }
    else{
      this.validatePassword()
    }
  }

  signUp(e) {
    e.preventDefault();
    if (this.validateEmail() && this.validatePassword()) {
      //TODO: User Authentication 

      //Clear Form
      let fields = {};
      fields["email"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
    }

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

    console.log("LOGGING EMAIL: " + email + " ERROR: " + errorMsg);

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

    console.log("LOGGING PASSWORD: " + password + " ERROR: " + errorMsg);


    errors["password"] = errorMsg;

    this.setState({
      errors: errors
    });

    return (errorMsg === "" ? true : false);
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.header}>
            Sign In
                </Typography>
          <form className={classes.form} onSubmit={this.signUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
              error={this.state.errors["email"] !== ""}
              helperText={this.state.errors["email"]}
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
              autoComplete="current-password"
              onChange={this.handleChange}
              error={this.state.errors["password"] !== ""}
              helperText={this.state.errors["password"]}
            />
            <Button className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/forgot' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/login' variant="body2">
                  "Already have an account? Sign in"
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUpScreen);
