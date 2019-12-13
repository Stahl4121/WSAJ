import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import firebase from "../firebase.js"
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';


const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    marginLeft: '5px',
    marginRight: '10px',
    marginBottom: '10px',
  }
});


const pictures = {
  President: require('../img/miriam.jpg'),
  "Song Master": require('../img/nate.jpg'),
  "Vice President": require('../img/sarah.jpg'),
  "Public Relations": require('../img/logan.jpg'),
};

class AdminContactCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      execPosition: props.execPosition,
      fields: {
        execName: props.execName,
        phoneNumber: props.phoneNumber,
        emailAddress: props.emailAddress,
        description: props.description,
      },
      errors: {
        execName: "",
        phoneNumber: "",
        emailAddress: "",
        description: "",
      },
      originalData: {
        execName: props.execName,
        phoneNumber: props.phoneNumber,
        emailAddress: props.emailAddress,
        description: props.description,
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  cancelChanges() {
    // need to re render the old data
    let fields = {};
    fields["execName"] = this.state.originalData["execName"];
    fields["phoneNumber"] = this.state.originalData["phoneNumber"];
    fields["emailAddress"] = this.state.originalData["emailAddress"];
    fields["description"] = this.state.originalData["description"];
    this.setState({ fields: fields });
  };

  saveChanges() {
    var db = firebase.firestore();
    db.collection("execContacts").doc(this.state.execPosition).set({
      execPosition: this.state.execPosition,
      execName: this.state.fields["execName"],
      phoneNumber: this.state.fields["phoneNumber"],
      emailAddress: this.state.fields["emailAddress"],
      description: this.state.fields["description"],
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    this.setState({ originalData: this.state.fields });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.state.execPosition}
        />
        <CardMedia
          className={classes.media}
          image={pictures[this.state.execPosition]}
          title="headshot"
        />
        <CardContent>
          <Typography variant="h4">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="exec-name"
              name="execName"
              label="Exec Name"
              value={this.state.fields["execName"]}
              onChange={this.handleChange}
              error={!this.state.errors["execName"] ? false : this.state.errors["execName"] !== ""}
              helperText={this.state.errors["execName"]}
            />
          </Typography>
          <Typography variant="h4">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={this.state.fields["description"]}
              onChange={this.handleChange}
              error={!this.state.errors["description"] ? false : this.state.errors["description"] !== ""}
              helperText={this.state.errors["description"]}
            />
          </Typography>
          <Typography paragraph>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone-number"
              name="phoneNumber"
              label="Phone Number"
              value={this.state.fields["phoneNumber"]}
              onChange={this.handleChange}
              error={!this.state.errors["phoneNumber"] ? false : this.state.errors["phoneNumber"] !== ""}
              helperText={this.state.errors["phoneNumber"]}
            />
          </Typography>
          <Typography paragraph>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email-address"
              name="emailAddress"
              label="Email Address"
              value={this.state.fields["emailAddress"]}
              onChange={this.handleChange}
              error={!this.state.errors["emailAddress"] ? false : this.state.errors["emailAddress"] !== ""}
              helperText={this.state.errors["emailAddress"]}
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="outlined" color="secondary" onClick={this.saveChanges} className={classes.button}>
            Save
              </Button>
          <Button variant="outlined" color="primary" onClick={this.cancelChanges} className={classes.button}>
            Cancel
              </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(AdminContactCard);
