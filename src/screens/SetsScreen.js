import React from 'react';
import { withStyles } from '@material-ui/styles';
import SongRequest from '../components/SongRequest.js';
import DJSet from '../components/DJSet';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DJShows from '../data/DJShows.json';
import firebase from "../firebase.js";


const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 0),
    },
    heroButtons: {
        marginTop: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardGrid: {
        paddingTop: theme.spacing(6),
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
});

class SetsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            sets: [],
            showName: '',
            showHost: '',
            description: '',
        }
    };

    componentDidMount() {
        var newSets = [];
        var db = firebase.firestore();
        db.collection("shows").get().collection("sets").get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var date = doc.data().date;
                var songs = doc.data().songs;
                console.log(songs);
                console.log(date);
                newSets.push(<Grid item xs={12} sm={6} md={4}><DJSet date={date} songs={songs} /></Grid>);
            });
            this.setState({ sets: newSets})
        });
    };

    // render() {
    //     const { classes } = this.props;
    //     var showName = '';
    //     var shows = DJShows['Shows'];
    //     var sets = [];
    //     var showSets = '';
    //     var showHost = '';
    //     var showDescription = '';
    //     var showGenre = '';
    //     var showTime = '';
    //     for (var i = 0; i < shows.length; i++) {
    //         // note: we add a key prop here to allow react to uniquely identify each
    //         // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    //         console.log('show: ' + shows[i]['ShowName']);
    //         if (shows[i]['ShowName'] === showName) {
    //             showDescription = shows[i]['ShowDescription'];
    //             showHost = shows[i]['ShowHost'];
    //             showGenre = shows[i]['ShowGenre'];
    //             showSets = shows[i]['SetHistory'];
    //             console.log('set ' + showSets);
    //             for (var j = 0; j < showSets.length; j++) {
    //                 console.log('your set, my good sir: ' + showSets[j]);
    //                 sets.push(
    //                     <Grid item xs={12} sm={6} md={4}>
    //                         <DJSet set={showSets[j]} />
    //                     </Grid>
    //                 );
    //             }
    //         }
    //     }

    render() {
        const { classes } = this.props;
        return (
            <div alignItems={'center'}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom>
                            {this.state.date}
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph>
                            {this.state.description}
                        </Typography>
                    </Container>
                </div>
                <SongRequest/>
                <div className={classes.heroContent}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom>
                            Set History
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph>
                            Here are the songs {this.state.showHost} has been playing lately.
                        </Typography>
                    <Container maxWidth="md" className={classes.cardGrid}>
                        <Grid container spacing={4} >
                            {this.state.sets}
                        </Grid>
                    </Container>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(SetsScreen);
