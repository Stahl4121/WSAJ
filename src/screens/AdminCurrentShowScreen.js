import React from 'react';
import CurrentShowCard from '../components/CurrentShowCard';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import firebase from "../firebase.js"


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

class AdminCurrentShowScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        }
        //this.componentDidMount.bind(this);
    };

    componentDidMount() {
        var newCards = [];
        var db = firebase.firestore();
        
        db.collection("shows").get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var showName = doc.data().showName
                var timeslot = doc.data().timeSlot
                var djName = doc.data().dj
                var phoneNum = doc.data().phoneNumber
                var email = doc.data().emailAddress
                var requestDate = doc.data().requestDate
                var acceptanceDate = doc.data().confirmDate
                var status = doc.data().status
                if(status==='current') {
                    newCards.push(<Grid item xs={12} sm={6} md={4}><CurrentShowCard 
                        showName={showName} 
                        timeslot={timeslot} 
                        djName={djName} 
                        phoneNum={phoneNum} 
                        email={email} 
                        requestDate={requestDate} 
                        acceptanceDate={acceptanceDate} /></Grid>);
                }
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
export default withStyles(styles)(AdminCurrentShowScreen);
