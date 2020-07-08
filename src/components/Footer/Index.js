import React from "react";
import Divider from "@material-ui/core/Divider";
import {TextoFooter} from "./styles";

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core";

export const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#00bcd5"
      },
      secondary: {
        main:"#cc1474"
      }
    }
  })

export default function Footer() {
  return (
    <MuiThemeProvider theme={tema}>
        <Divider />
        <TextoFooter>
            <p>Site desenvolvido por...</p>
        </TextoFooter>
    </ MuiThemeProvider>
  );
}
