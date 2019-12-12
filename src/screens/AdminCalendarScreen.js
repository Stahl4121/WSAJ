import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import firebase from "../firebase.js";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

// from the react-big-calendar and the intl-justice-mission github examples and issues
// with some changes of our own
class DNDCalendarScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      events: [],
    }
    this.moveEvent = this.moveEvent.bind(this);
    //this.newEvent = this.newEvent.bind(this);
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

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  newEvent = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
      console.log("these are the dates");
      console.log(end.toString());
      var db = firebase.firestore();
      db.collection("events").doc(title).set({
          name: title,
          end: end.toString(),
          start: start.toString()
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }

  onSelectEvent(pEvent) {
   const r = window.confirm("Would you like to remove this event?")
   if(r === true){
     
     this.setState((prevState, props) => {
       const events = [...prevState.events]
       const idx = events.indexOf(pEvent)
       events.splice(idx, 1);
       return { events };
     });
   }
 }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="dnd">
        <DnDCalendar
          selectable
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.moveEvent}
          resizable
          onEventResize={this.resizeEvent}
          onSelectEvent = {event => this.onSelectEvent(event)}
          onSelectSlot={this.newEvent}
          onDragStart={console.log}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default (DNDCalendarScreen);
