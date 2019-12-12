import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import firebase from "../firebase.js";

const localizer = momentLocalizer(moment);


class CalendarScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      events: [],
    }
  };

  componentDidMount() {
        var newEvents = [];
        var db = firebase.firestore();
        db.collection("events").get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                var name = doc.data().name;
                var startStr = doc.data().start;
                var endStr = doc.data().end;
                var start = new Date(startStr);
                var end = new Date(endStr);               
                console.log({"start": start, "end": end, "title": name});
                //console.log(start);
                newEvents.push({"start": start, "end": end, "title": name});
            });
            this.setState({ events: newEvents})
            console.log(this.state.events);
        });
    };

  render() {
    const { classes } = this.props;

    return (
      <div className="dnd">
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default (CalendarScreen);
