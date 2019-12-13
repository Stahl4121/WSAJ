import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import AdminContactCard from '../components/AdminContactCard';
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

class AdminExecContactScreen extends React.Component {
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
        
        db.collection("execContacts").get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var execPosition = doc.data().execPosition;
                console.log("these are the execPositions: ", execPosition);
                var execName = doc.data().execName;
                var phoneNumber = doc.data().phoneNumber;
                var emailAddress = doc.data().emailAddress;
                var description = doc.data().description;
                //var picture = doc.data().picture;
                console.log(execName)
                console.log(phoneNumber)
                newCards.push(<Grid item xs={12} sm={6} md={4}>
                                <AdminContactCard 
                                    execPosition={execPosition}
                                    execName={execName} 
                                    phoneNumber={phoneNumber} 
                                    emailAddress={emailAddress} 
                                    description={description}
                                    //picture={picture}
                                />
                              </Grid>);
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
                            Executive Contacts
                    </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Please reach out to us if you have any questions!
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
export default withStyles(styles)(AdminExecContactScreen);
