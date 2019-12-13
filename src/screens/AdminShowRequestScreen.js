import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ShowRequestCard from '../components/ShowRequestCard';
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

class AdminShowRequestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        }
    };

    componentDidMount() {
        var newCards = [];
        var db = firebase.firestore();
        
        db.collection("shows").get().onSnapshot((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                if (doc.data().status==='requested') {
                    var name = doc.data().showName;
                    var dj = doc.data().dj;
                    var email = doc.data().emailAddress;
                    var description = doc.data().description;
                    var phone = doc.data().phoneNumber;
                    var time = doc.data().timeSlot;
                    var date = doc.data().requestDate;
                    var status = doc.data().status;
                    newCards.push(<ShowRequestCard name={name} dj={dj} email={email} date={date} description={description} time={time} phone={phone} status={status} />);
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
                            Show Requests
                    </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            These shows are still pending your approval
                    </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {this.state.cards}
                </Container>
            </div>
        );
    }
}
export default withStyles(styles)(AdminShowRequestScreen);
