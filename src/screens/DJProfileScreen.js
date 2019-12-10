//from a sandbox tutuorial
import React from "react";
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'left',
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
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: '4em',
    marginRight: '4em',
    marginTop: '2em',
    marginBottom: '2em',
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
  button: {
    paddingLeft: '4em',
    paddingRight: '4em',
    margin: '1em',
    width: '10em',
  },
  songs: {
    marginTop: '1em',
    padding: '1em',
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
    this.validateAll = this.validateAll.bind(this);
    this.signUp = this.signUp.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  validateAll(){
    
    for (const [value] of Object.entries(this.state.errors)) {
      if (!value || value !== ""){
        return false;
      }
    }
    return true;
  }

  signUp(e) {
    e.preventDefault();
    if (this.validateAll()) {
      //TODO: User Authentication 

      //Clear Form
      let fields = {};
      fields["showName"] = "";
      fields["djNames"] = "";
      fields["description"] = "";
      fields["genre"] = "";
      this.setState({ fields: fields });
    }

  }

  cancel(e) {
    e.preventDefault();
    
    //Clear Form
    //DONT save CHANGES
    let fields = {};
    fields["showName"] = "";
    fields["djNames"] = "";
    fields["description"] = "";
    fields["genre"] = "";
    this.setState({ fields: fields });
  }

  clearSongs(e) {
    ////////////////////////////////////
    // CLEAR DATABASE  SONG REQUESTS ///
    ////////////////////////////////////
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="md">
        <div className={classes.root}>
          <form className={classes.form} onSubmit={this.signUp}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <Typography component="h1" variant="h5" className={classes.header}>
                DJ Profile
              </Typography>
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
                  label="Genre"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["genre"] ? false : this.state.errors["genre"] !== ""}
                  helperText={this.state.errors["genre"]}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  autoFocus
                  onChange={this.handleChange}
                  error={!this.state.errors["description"] ? false : this.state.errors["description"] !== ""}
                  helperText={this.state.errors["description"]}
                />
                <Button className={classes.submit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Save
                </Button>
                <Button className={classes.submit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.cancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h5" className={classes.header}>
                    Song Requests
                </Typography>
                <Paper className={classes.songs}>
                  <Typography variant="body1" id="songList">
                    Songs (get from database)
                  </Typography>
                </Paper>
                <Button className={classes.submit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.clearSongs}
                >
                  Clear Song Requests
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUpScreen);
