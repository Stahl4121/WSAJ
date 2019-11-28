import React from 'react';
import DJSet from '../components/DJSet.js';
import Typography from '@material-ui/core/Typography';
import DJShows from '../data/DJShows.json';

export default function DJSetsScreen(props) {
    var ShowName = props.match.params.name.split('-').join(' ');
    var shows = DJShows['Shows'];
    var sets = [];
    for (var i = 0; i < shows.length; i++) {
        // console.log(DJShows['Shows'][i]);
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        console.log('show: ' + shows[i]['ShowName']);
        if (shows[i]['ShowName'] === ShowName) {
            var showSets = shows[i]['SetHistory'];
            console.log('set ' + showSets);
            for (var j = 0; j < showSets.length; j++) {
                console.log('your set, my good sir: ' + showSets[j]);
                sets.push(<DJSet set={showSets[j]}></DJSet>);
            }
        }
    }
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2">
                {ShowName}
            </Typography>
            {sets}
        </div>
    );
}