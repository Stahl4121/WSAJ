import React from 'react';
import DJSet from '../components/DJSet.js';
import Typography from '@material-ui/core/Typography';


export default function DJSetsScreen(props) {
    console.log('um hello')
    console.log('Show name: ' + this.props.param.show);
    // var sets =[];
    // for (var i = 0; i < sets.length; i++) {
    //     // note: we add a key prop here to allow react to uniquely identify each
    //     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    //     sets.push(<DJSet></DJSet>);
    // }
    return (
        <Typography gutterBottom variant="h5" component="h2">
            Hello
        </Typography>
    );
}