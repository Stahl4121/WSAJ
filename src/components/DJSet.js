import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function DJSet(props) {
    var date = Object.keys(props.set);
    var songs = props.set[date];
    var songList = [];
    for (var i = 0; i < songs.length; i++) {
        songList.push(<Typography variant="body2" color="textSecondary" component="p">{songs[i]}</Typography>);
    }
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {date}
                </Typography>
                {songList}
            </CardContent>
        </Card>
    );
}
