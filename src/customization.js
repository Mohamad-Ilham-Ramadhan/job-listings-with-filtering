import { createMuiTheme } from "@material-ui/core/styles";
import { spartan400, spartan700 } from "./fonts";

// ## Colors
// ### Primary

const desaturatedDarkCyan = "hsl(180, 29%, 50%)";

// ### Neutral

const lightGrayishCyanBg = "hsl(180, 52%, 96%)"; // Background
const lightGrayishCyanFt = "hsl(180, 31%, 95%)"; // Filter Tablets
const darkGrayishCyan = "hsl(180, 8%, 52%)";
const veryDarkGrayishCyan = "hsl(180, 14%, 20%)";

const boxShadow =
  "0px 6px 6px -3px hsla(180, 29%, 50%, 0.1), 0px 10px 14px 1px rgba(91, 164, 164, 0.1), 0px 4px 18px 3px rgba(91, 164, 164, 0.1)";

const theme = createMuiTheme({});

const customizedTheme = createMuiTheme({
  typography: {
    fontFamily: "Spartan",
    body1: {
      fontFamily: "Spartan",
    },
  },
  palette: {
    primary: {
      main: desaturatedDarkCyan,
    },
    neutral: {
      lightGrayishCyanBg: lightGrayishCyanBg,
      lightGrayishCyanFt: lightGrayishCyanFt,
      darkGrayishCyan: darkGrayishCyan,
      veryDarkGrayishCyan: veryDarkGrayishCyan,
    },
  },
  shadows: theme.shadows.map((shadow, index) => {
    return index === 10 ? boxShadow : shadow;
  }),
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [spartan400, spartan700],
        body: {
          fontFamily: "Spartan, Roboto, Helvetica, Arial, sans-serif",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});

export default customizedTheme;
