//from a sandbox tutuorial

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    root: {
      margin: '10em',
    },
    header: {
        marginBottom: '24',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    fields: {
        marginBottom: '24',
    },
    progress: {
        color: '#fff',
        size: '6',
    },
    button: {
        color: 'primary',
    },
}));

export default function LogForm() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <React.Fragment>
            <Typography variant="h5" className={classes.header}>
            Login
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField className={classes.fields} 
                variant={"outlined"}
                required
                type={"email"}
                label={"Email"}
                value={"email"}
                onChange={this.handleChange("email")}
            />
            <TextField className={classes.fields}
                variant={"outlined"}
                required
                type={"password"}
                label={"Password"}
                value={"password"}
                onChange={this.handleChange("password")}
            />
            <Button className={classes.button}
                type={"submit"}
                fullWidth
                variant={"contained"}
            >
                {submitting ? (
                <CircularProgress className={classes.progress} />
                ) : (
                "Submit"
                )}
            </Button>
            </form>
        </React.Fragment>
      </div>
    );
  }

