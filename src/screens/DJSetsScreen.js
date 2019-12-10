import React from 'react';
import { withStyles } from '@material-ui/styles';
import SongRequest from '../components/SongRequest.js';
import DJSet from '../components/DJSet';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import firebase from "../firebase.js";
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Auth from '../components/AuthFunctions.js';

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

class DJSetsScreen extends React.Component {
    constructor(props) {
        var name = props.match.params.name.split('-').join(' ')
        console.log(name);
        super();
        this.state = {
            showName: name,
            show: '',
            sets: [],
            dj: '',
            description: '',
            showGenre: '',
            showTime: '',
        }
    };

    componentDidMount() {
        var db = firebase.firestore();
        var name = this.state.showName
        var djName = '';
        var des = '';
        var sets = [];
        var dbRef = db.collection("shows");
        dbRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().showName === name) {
                    djName = doc.data().dj;
                    des = doc.data().description;
                    db.collection('shows/' + doc.id + '/sets').get().then((subCollectionSnapshot) => {
                        subCollectionSnapshot.forEach((subDoc) => {
                            var date = subDoc.id;
                            var songs = subDoc.data().songs;
                            sets.push(
                                <Grid item xs={12} sm={6} md={4}>
                                    <DJSet date={date} songs={songs} />
                                </Grid>
                            );
                        });
                        this.setState({ sets: sets })
                    });
                }

            });

            this.setState(
                {
                    dj: djName,
                    description: des,
                }
            )
        });
    };

    render() {
        console.log(Auth.isUser())
        const { classes } = this.props;
        var linkTo = '/shows/' + this.props.match.params.name + '/add-set';
        return (
            <div alignItems={'center'}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom>
                            {this.state.showName}
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
                <SongRequest />
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
                        Here are the songs {this.state.dj} has been playing lately.
                    </Typography>
                    <Container maxWidth="md" className={classes.cardGrid}>
                        <Grid container
                            direction="row"
                            alignItems="center" 
                            spacing={4} >
                            <Grid item xs={12} sm={6} md={4}>
                                <Fab color="primary" aria-label="add"
                                    component={Link}
                                    to={linkTo}
                                    size="large"
                                    display={Auth.isUser() ? '' : 'none'} >
                                    <AddIcon />
                                </Fab>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Add Set
                                </Typography>
                            </Grid>
                            {this.state.sets}
                        </Grid>
                    </Container>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(DJSetsScreen);
