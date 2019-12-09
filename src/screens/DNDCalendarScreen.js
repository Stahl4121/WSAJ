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
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        },
        {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2019, 11, 0),
          end: new Date(2019, 11, 1),
        },
        {
            id: 1,
            title: 'Long Event',
            start: new Date(2019, 11, 7),
            end: new Date(2019, 11, 10),
        },
    
        {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        },
    
        {
            id: 3,
            title: 'DTS ENDS',
            start: new Date(2016, 10, 6, 0, 0, 0),
            end: new Date(2016, 10, 13, 0, 0, 0),
        },
    
        {
            id: 4,
            title: 'Some Event',
            start: new Date(2019, 11, 9, 0, 0, 0),
            end: new Date(2019, 11, 10, 0, 0, 0),
        },
        {
            id: 5,
            title: 'Conference',
            start: new Date(2019, 11, 11),
            end: new Date(2019, 11, 13),
            desc: 'Big conference for important people',
        },
        {
            id: 6,
            title: 'Meeting',
            start: new Date(2019, 11, 12, 10, 30, 0, 0),
            end: new Date(2019, 11, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting',
        },
        {
            id: 7,
            title: 'Lunch',
            start: new Date(2019, 11, 12, 12, 0, 0, 0),
            end: new Date(2019, 11, 12, 13, 0, 0, 0),
            desc: 'Power lunch',
        },
        {
            id: 8,
            title: 'Meeting',
            start: new Date(2019, 11, 12, 14, 0, 0, 0),
            end: new Date(2019, 11, 12, 15, 0, 0, 0),
        },
        {
            id: 9,
            title: 'Happy Hour',
            start: new Date(2019, 11, 12, 17, 0, 0, 0),
            end: new Date(2019, 11, 12, 17, 30, 0, 0),
            desc: 'Most important meal of the day',
        },
        {
            id: 12,
            title: 'Late Night Event',
            start: new Date(2019, 11, 17, 19, 30, 0),
            end: new Date(2019, 11, 18, 2, 0, 0),
        },
        {
            id: 12.5,
            title: 'Late Same Night Event',
            start: new Date(2019, 11, 17, 19, 30, 0),
            end: new Date(2019, 11, 17, 23, 30, 0),
        },
        {
            id: 13,
            title: 'Multi-day Event',
            start: new Date(2019, 11, 20, 19, 30, 0),
            end: new Date(2019, 11, 22, 2, 0, 0),
        },
        {
            id: 14,
            title: 'Today',
            start: new Date(new Date().setHours(new Date().getHours() - 3)),
            end: new Date(new Date().setHours(new Date().getHours() + 3)),
        },
      ],
    }
    this.moveEvent = this.moveEvent.bind(this);
    //this.newEvent = this.newEvent.bind(this);
  };

  // onEventResize = (type, { event, start, end, allDay }) => {
  //   this.setState(state => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     console.log(start);
  //     console.log(end);
  //     console.log(event);
  //     console.log(allDay);
  //     return { events: state.events };
  //   });
  // };

  // onEventDrop = ({ event, start, end, allDay }) => {
  //   console.log(start);
  // };

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
