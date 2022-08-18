import { createTheme } from "@mui/material";
import { primaryColor, neutralColor, gradientColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'black',
    },
    secundary: {
      main: gradientColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor,
    },
    background: '#E5E5E5',
  },
  typography: {
    fontFamily: [
      'Roboto',
      /* '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"', */
    ].join(','),
  },
});

//"#FE6B8B"
export default theme;