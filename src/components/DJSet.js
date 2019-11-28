import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function DJSet(props) {
    var date = Object.keys(props.set);
    var songs = props.set[date];
    console.log(songs);
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        DJ MRM 11.26.2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Leftovers by Max Richter
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The Search by NF
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                         I Need My Girl by The National
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        DJ SARAH 11.26.2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        There's Something Dark by Dustin Kensrue
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hard to Get by Rich Mullins
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The Artist by Sarah Sparks
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        DJ LOGAN 11.26.2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        At the Table by Josh Garrels
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ghost Machine by Jon Foreman
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        What Is This Unto by Hunter G K Thompson
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        DJ SPRECH 11.26.2019
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        We're Going To Be Friends by the White Stripes 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        On the Nature of Daylight by Max Richter
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Dare You to Move by Switchfoot
                    </Typography>
                </CardContent>
            </Card>
        </div> 
    );
}
