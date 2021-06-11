import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import "../src/scss/settings/_colors.scss";
import "../src/scss/settings/_fonts.scss";
import createPalette from '@material-ui/core/styles/createPalette';

const opensans = {
  fontFamily: "Open Sans"
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open sans',
      'Merriweather',
    ].join(',')
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