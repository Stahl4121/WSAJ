import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Profile = ({ displayName = "Unknown" }) => (
  <Typography>
    My name is <b>{displayName}</b>
  </Typography>
);

export default Profile;
