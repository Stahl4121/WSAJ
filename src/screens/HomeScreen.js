import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import PaperSheet from '../components/HomePaper';
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
            papers: [],
        }
    };

    componentDidMount() {
        var newCards = [];
        var db = firebase.firestore();
        
        db.collection('announcements').get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var title = doc.data().title;
                var date = doc.data().date;
                var announcement = doc.data().announcement;
                newCards.push(<PaperSheet title={title} date={date} announcement={announcement} />);
            });
            this.setState({ papers: newCards})
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>            
                {this.state.papers} 
            </div>
        );
    }
}
export default withStyles(styles)(DJShowsScreen);
