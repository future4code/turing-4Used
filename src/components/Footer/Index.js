import React from "react";
import Divider from "@material-ui/core/Divider";
import {TextoFooter} from "./styles";
export default function Footer() {
  return (
    <>
      <Divider />
      <TextoFooter>
        <p>Site desenvolvido por...</p>
      </TextoFooter>
    </>
  );
}
