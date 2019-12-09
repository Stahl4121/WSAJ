import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);


class DNDCalendarScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      events: [
        {
          id: 0,
          start: new Date(),
          end: new Date(moment().add(1, "h")),
          title: "First Event"
        },
        {
          id: 1,
          start: new Date(),
          end: new Date(moment().add(1, "h")),
          title: "Ice Cream Time"
        },
        {
          id: 2,
          start: new Date(),
          end: new Date(moment().add(1, "h")),
          title: "Snack Time"
        },
      ],
    }
    this.moveEvent = this.moveEvent.bind(this);
    //this.newEvent = this.newEvent.bind(this);
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
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.moveEvent}
          resizable
          onEventResize={this.resizeEvent}
          onSelectSlot={this.newEvent}
          onDragStart={console.log}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default (DNDCalendarScreen);
