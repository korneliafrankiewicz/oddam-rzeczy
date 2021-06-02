import { createMuiTheme } from '@material-ui/core';
import "../src/scss/settings/colors.scss"

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "$color-yellow",
      },
      secondary: {
        main: '$color-dark',
      },
    },
  });