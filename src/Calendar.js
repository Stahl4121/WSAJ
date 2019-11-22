import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Card,
  CardActionArea,
  CardContent
} from "@material-ui/core";


const weekdays = [
    { id: 0, day: "Sun" },
    { id: 1, day: "Mon" },
    { id: 2, day: "Tue" },
    { id: 3, day: "Wed" },
    { id: 4, day: "Thu" },
    { id: 5, day: "Fri" },
    { id: 6, day: "Sat" }
  ];

const eachWeek = [];
let daysOfWeek = [];

const months = [
    { id: 0, month: "January"}, 
    { id: 1, month: "February"}, 
    { id: 2, month: "March"}, 
    { id: 3, month: "April"}, 
    { id: 4, month: "May"},
    { id: 5, month: "June"}, 
    { id: 6, month: "July"}, 
    { id: 7, month: "August"}, 
    { id: 8, month: "September"}, 
    { id: 9, month: "October"}, 
    { id: 10, month: "November"}, 
    { id: 11, month: "December"}
  ];
let day = startDate;
let end = endDate;
let formattedDate;
const dateFormat = "D";
