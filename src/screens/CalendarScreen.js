import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);


class CalendarScreen extends React.Component {
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
          title: "MRM Music"
        },
        {
          id: 1,
          start: new Date(),
          end: new Date(moment().add(1, "h")),
          title: "Ice Cream Show"
        },
        {
          id: 2,
          start: new Date(),
          end: new Date(moment().add(1, "h")),
          title: "Lyric Delights Hour"
        },
      ],
    }
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
