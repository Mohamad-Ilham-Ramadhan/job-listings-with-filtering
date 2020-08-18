import React from "react";
import { create } from "jss";
import preset from "jss-preset-default";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../customization";
import Home from "./Home";

const jss = create();
jss.setup(preset());

export default function App() {
  return (
    <React.StrictMode>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </StylesProvider>
    </React.StrictMode>
  );
}
