import React, { Component } from 'react';
import ComponentPostarProduto from './ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro';
import Footer from "./Footer/Index";
import Header from "./CardHeader/Index";
import CardCategoria from './CardCategoria/CardCategoria';
import Carrinho from './Carrinho'


export class AppContainer extends Component {

  state = {
    paginaAtual: "Inicio"
  }

  mudaPagina = (a) => {
    switch(a) {
      case "Vender":
        this.setState({ paginaAtual: "Vender"});
        break;
      case "Carrinho":
        this.setState({ paginaAtual: "Carrinho"});
        break;  
      default:
        this.setState({ paginaAtual: "Inicio" });
    }
  }

  render() {
    console.log(this.state.paginaAtual)
    let renderiza = "";
    switch (this.state.paginaAtual) {
    case 'Vender':
      renderiza =
        <ComponentPostarProduto mudaPagina={this.mudaPagina} />
      break;
    case 'Inicio':
      renderiza =
        <div>
          <ComponentFiltro mudaPagina={this.mudaPagina} />
          <CardCategoria mudaPagina={this.mudaPagina}/>  
        </div>
      break;
    case 'Carrinho':
      renderiza =
        <Carrinho mudaPagina={this.mudaPagina}/>     
      break;  
    default: 
    renderiza =
      <ComponentFiltro mudaPagina={this.mudaPagina} />
  }

  return (
      <div>
        <Header mudaPagina={this.mudaPagina}/>
        {renderiza}
        <Footer />
      </div>
    )
  }
}

