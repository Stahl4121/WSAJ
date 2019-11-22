//Material theme
//from https://github.com/joswong13/material-ui-calendar/blob/master/src/muitheme.js
//to deal with alterations in datefns
import { createMuiTheme } from "@material-ui/core";
import { teal, orange, red } from "@material-ui/core/colors";

export const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: teal["A100"] },
    secondary: { main: orange["A100"], light: orange[500] },
    caution: { main: red[500] },
    type: "dark"
  }
});

export const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: teal["A100"] },
    secondary: { main: orange["A100"], light: orange[500] },
    caution: { main: red[500] },
    type: "light"
  }
});