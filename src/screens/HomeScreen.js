import React from 'react';
import { withStyles } from '@material-ui/styles';
import PaperSheet from '../components/HomePaper';
import firebase from "../firebase.js";
import Image from '../img/home91-1.png';


const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
