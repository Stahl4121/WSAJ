// https://github.com/joswong13/material-ui-calendar/blob/master/src/index.js
import React, { Component } from "react";
import { Paper, Button, Typography, IconButton } from "@material-ui/core";
import dateFns from "date-fns";
import ChevronLeftRounded from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import DisplayMonthlyCalendar from "./DisplayMonthlyCalendar";
import DisplayDailyCalendar from "./DisplayDailyCalendar";

//Material theme
import { MuiThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./muitheme";


//Material theme
import { MuiThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./muitheme";

export default class Calendar extends Component {
  state = {
    selectedDate: new Date(),
    selectedMonth: new Date(),
    showFunctionalHeader: true,
    selectStartandEnd: false,
    selected1: null,
    selected2: null,
    functionalMode: false
  };

  /***************************************************************************************
   * Calender Header 
   ***************************************************************************************/
  renderHeader = () => {
    const dateYearFormat = "YYYY";
    let header;

    const pastFiveYears = dateFns.addYears(this.state.selectedDate, -9);
    const nextFiveYears = dateFns.addYears(this.state.selectedDate, 2);
    header = (
      <Typography variant="h5" inline={true}>
        {dateFns.format(pastFiveYears, dateYearFormat)} -{" "}
        {dateFns.format(nextFiveYears, dateYearFormat)}
      </Typography>
    );

    return (
      <Paper
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          minHeight: "5%"
        }}
      >
        <IconButton onClick={() => this.yearChevronClick(true)}>
          <ChevronLeftRounded />
        </IconButton>
        {header}
        <IconButton onClick={() => this.yearChevronClick(false)}>
          <ChevronRightRounded />
        </IconButton>
      </Paper>
    );
  };


  /*
   * Clicking on the chevron buttons next to the calendar will add or subtract months.
   */
  onChevronClick = direction => {
    if (direction) {
        this.setState({
          selectedDate: dateFns.addMonths(this.state.selectedDate, -1)
        });
    } else {
        this.setState({
          selectedDate: dateFns.addMonths(this.state.selectedDate, 1)
        });
    }
  };


  /***************************************************************************************
   * Calendar functions (on click)
   ***************************************************************************************/
  onDateClick = day => {
    this.setState({
      selectedDate: day
    });

    //This is for returning date when publishing
    if (
      this.props.selection !== undefined &&
      this.props.mode !== "month" &&
      this.props.mode !== "year"
    ) {
      this.props.selection(day);
    }
  };

  defaultDaySelector = () => {
    let textColor;
    textColor = { color: "rgba(256,256,256,1)" };
    let body;
    body = (
        <DisplayDailyCalendar
            selectedDate={this.state.selectedDate}
            onDateClick={this.onDateClick}
            light={textColor}
        />
    );
    
    return (
      <div style={{ height: "100%" }}>
        {this.renderHeader()}
        {body}
      </div>
    );
  };

  /**
   * Main render method
   */
  render() {
    return (
      <MuiThemeProvider theme={this.props.darkTheme}>
        <Paper style={this.props.generalStyle}>{this.defaultDaySelector()}</Paper>
      </MuiThemeProvider>
    );
  }
}

////////////////////////////////
