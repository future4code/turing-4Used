import React from "react";
import {HeaderElementos, Logo, HeaderNav, Menu} from "./styles";
import logo from "./img/logo-4used-transparent.png";

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles'; //estilo especial para o texto botão

import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Carrinho from "@material-ui/icons/ShoppingCart";
import Divider from "@material-ui/core/Divider";

const tema = createMuiTheme({
  palette: {
    primary: {
      main: "#00bcd5"
    },
    secondary: {
      main:"#cc1474"
    }
  }
})

const BotaoHeader = withStyles({ //estilo do botão para texto branco
  root: {
    color: 'white',
  },
})(Button);

export default function Header() {
  return (
    <MuiThemeProvider theme={tema}>
        <HeaderElementos>
          <Logo>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>  
          </Logo>

          <HeaderNav>
            <Menu>
                <Button size="small">ROUPAS</Button>
                <Button size="small">ACESSÓRIOS</Button> 
                <Button size="small">CALÇADOS</Button> 
                <Button size="small">OUTROS</Button>         
                <IconButton aria-label="Carrinho">
                    <Carrinho color="primary" fontSize="small" />
                </IconButton>
            </Menu>
                  
            <BotaoHeader color="primary" variant="contained">Vender</BotaoHeader>     
          </HeaderNav>
        </HeaderElementos>
        <Divider />
    </ MuiThemeProvider>
  );
}
