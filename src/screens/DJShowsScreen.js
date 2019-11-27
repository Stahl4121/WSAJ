import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DJCard from '../components/DJCard';
import DJShows from '../data/DJShows.json';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function DJShowsScreen() {
    const classes = useStyles();
    var shows = DJShows["Shows"];
    var cards = [];

    console.log(shows);

    for (var i = 0; i < shows.length; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        cards.push(<Grid container item xs={3} spacing={0}><DJCard show={shows[i]} /></Grid>);
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>{cards}</Grid>
        </div>
    );
}