import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DJSet from '../components/DJSet';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DJShows from '../data/DJShows.json';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: 250,
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function DJSetsScreen(props) {
    const classes = useStyles();

    var ShowName = props.match.params.name.split('-').join(' ');
    var shows = DJShows['Shows'];
    var sets = [];
    for (var i = 0; i < shows.length; i++) {
        // console.log(DJShows['Shows'][i]);
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        console.log('show: ' + shows[i]['ShowName']);
        if (shows[i]['ShowName'] === ShowName) {
            var showSets = shows[i]['SetHistory'];
            console.log('set ' + showSets);
            for (var j = 0; j < showSets.length; j++) {
                console.log('your set, my good sir: ' + showSets[j]);
                sets.push(<Grid item /*key={card}*/ xs={12} sm={6} md={4}><DJSet set={showSets[j]} /></Grid>);
            }
        }
    }
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2">
                {ShowName}
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} >
                    {sets}
                </Grid>
            </Container>
        </div>
    );
}