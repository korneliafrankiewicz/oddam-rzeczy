import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import "../src/scss/settings/_colors.scss";
import "../src/scss/settings/_fonts.scss";
import createPalette from '@material-ui/core/styles/createPalette';
// import {yellow , grey} from '@material-ui/core/colors';

// const newYellow = yellow['600'];
// const newGrey = grey['800'];

const opensans = {
  fontFamily: "Open Sans"
}

const theme = createMuiTheme({
  typography: {
    fontFamily: opensans,
  },
    palette: createPalette({
      primary: {
        main: "#FFFFFF",
        contrastText: "#3C3C3C",
      },
      secondary: {
        main: '#FAD648',
        contrastText: "#3C3C3C",
      },
    }),
    shadows: ["none"],

    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [opensans],
        },
      },
      MuiButton: {
        text: {
          color: "#3C3C3C",
          textTransform: "none",
          padding: "10px 30px",
          borderRadius: "0px",
          letterSpacing: "1.3px",
        }
      }
    }
  
  });

  export default theme;