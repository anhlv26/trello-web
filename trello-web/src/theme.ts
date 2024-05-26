import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

// A custom theme for this app
declare module "@mui/material/styles" {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }
  interface CssVarsThemeOptions {
    trello?: {
      appBarHeight?: React.CSSProperties["height"];
      boardBarHeight?: React.CSSProperties["height"];
    };
  }
}

const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
});

export default theme;
