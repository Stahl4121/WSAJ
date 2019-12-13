import React from "react";
import { Link } from 'react-router-dom';
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
import { withRouter } from "react-router-dom";


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
    textDecoration: 'none',
  },
  errorMsg: {
    color: 'red',
    marginTop: theme.spacing(1),
  }
});

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        login: "",
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.signIn = this.signIn.bind(this);
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
  }

  signIn(e) {
    if (this.validateEmail()) {
      let errors = this.state.errors;
      errors['login'] = "";
      this.setState({ errors: errors });

      firebase.auth().signInWithEmailAndPassword(this.state.fields["email"], this.state.fields["password"])
        .then(() => {
          this.props.history.push('/');
        })
        .catch((error) => {
          // Handle Errors 
          var errorCode = error.code;
          var errorMessage = error.message;

          let errors = this.state.errors;
          errors['login'] = errorMessage;
          this.setState({ errors: errors });
        });
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
    errors["email"] = errorMsg;

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
              Sign In
          </Typography>
            <Typography component="h6" className={classes.errorMsg} >
              {this.state.errors["login"]}
            </Typography>
            <div className={classes.form}>
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
                error={!this.state.errors["email"] ? false : this.state.errors["email"] !== ""}
                helperText={this.state.errors["email"]}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button className={classes.submit}
                onClick={(e) => this.signIn(e)}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
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
                  <Link to='/signup' className={classes.links}>
                    <MUILink variant="body2" component={'span'}>
                      Don't have an account? Sign up
                </MUILink>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      );
    }
  }
}

export default withRouter(withStyles(styles)(LoginScreen));
