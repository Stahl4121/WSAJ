import React from 'react';
import { withStyles } from '@material-ui/styles';
import PaperSheet from '../components/HomePaper';
import firebase from "../firebase.js";
import Image from '../img/home91-1.png';
import AdminPaperSheet from '../components/AdminHomePaper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        color: 'white',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',

    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    floater: {
        marginLeft: "auto",
        marginRight: "-22",
    }
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

        if (this.props.auth === "admin") {
            db.collection('announcements').get().then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    var title = doc.data().title;
                    var date = doc.data().date;
                    var announcement = doc.data().announcement;
                    newCards.push(<AdminPaperSheet title={title} date={date} announcement={announcement} />);
                });
                this.setState({ papers: newCards })
            });
        }
        else {
            db.collection('announcements').get().then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    var title = doc.data().title;
                    var date = doc.data().date;
                    var announcement = doc.data().announcement;
                    newCards.push(<PaperSheet title={title} date={date} announcement={announcement} />);
                });
                this.setState({ papers: newCards })
            });
        }
    };

    render() {
        const { classes } = this.props;
        var linkTo = "/admin/add-announcement";
        return (
            <div className={classes.root}>
                <div style = {{display: (this.props.auth === "admin" ? "inline" : "none")}}>
                <Toolbar>
                    <span className={classes.floater}>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={linkTo}
                            className={classes.button}
                            startIcon={<AddIcon fontSize="large" />}
                        >
                            Add New Announcement
                    </Button>
                    </span>
                </Toolbar>
                </div>
                {this.state.papers}
            </div>
        );
    }
}
export default withStyles(styles)(DJShowsScreen);