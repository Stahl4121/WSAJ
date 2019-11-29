import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DJCard from '../components/DJCard';
import DJShows from '../data/DJShows.json';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 0),
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
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function DJShowsScreen() {
    const classes = useStyles();
    var shows = DJShows["Shows"];
    var cards = [];

    for (var i = 0; i < shows.length; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        cards.push(<Grid item /*key={card}*/ xs={12} sm={6} md={4}><DJCard show={shows[i]} /></Grid>);
    }
    return (
        <div>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        WSAJ Shows
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        We copied this site:{"\n"}
                        https://material-ui.com/getting-started/templates/album/{"\n"}
                        almost exactly to create this cardview. Click a show to check it out!
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} >
                    {cards}
                </Grid>
            </Container>
        </div>
    );
}