import React from "react";
import {HeaderContainer, HeaderElementos, Logo, HeaderNav, Menu, BotaoHeader} from "./styles";
import logo from "./img/logo-4used-transparent.png";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Carrinho from "@material-ui/icons/ShoppingCart";
import Divider from "@material-ui/core/Divider";

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderElementos>
        <Logo onClick={() => props.mudaPagina("Inicio")}>
          <img src={logo} alt="Logo" />
        </Logo>
        <HeaderNav>
          <Menu>
            <Button size="small" onClick={() => props.mudaPagina("Roupas")}>ROUPAS</Button>
            <Button size="small" onClick={() => props.mudaPagina("Acessórios")}>ACESSÓRIOS</Button> 
            <Button size="small" onClick={() => props.mudaPagina("Calcados")}>CALÇADOS</Button> 
            <Button size="small" onClick={() => props.mudaPagina("Outros")}>OUTROS</Button>         
            <IconButton aria-label="Carrinho">
              <Carrinho color="primary" fontSize="small" onClick={() => props.mudaPagina("Carrinho")}/>
              {props.produtosCarrinho}
            </IconButton>
          </Menu>                  
          <BotaoHeader size="small" color="primary" variant="contained" onClick={() => props.mudaPagina("Vender")}>Vender</BotaoHeader>     
        </HeaderNav>
      </HeaderElementos>
      <Divider />
    </ HeaderContainer>
  );
}

