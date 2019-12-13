import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import DJCard from '../components/DJCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(6),
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
});

class DJShowsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        }
    };

    componentDidMount() {
        var newCards = [];
        var db = firebase.firestore();
        
        db.collection("shows").get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var name = doc.data().showName;
                var dj = doc.data().dj;
                var execPosition = doc.data().execPosition;
                console.log(name)
                console.log(dj)
                newCards.push(<Grid item xs={12} sm={6} md={4}><DJCard name={name} djName={dj} execPosition={execPosition}/></Grid>);
            });
            this.setState({ cards: newCards})
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            WSAJ Shows
                    </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Click a show to check it out!
                    </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} >
                        {this.state.cards}
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default withStyles(styles)(DJShowsScreen);
