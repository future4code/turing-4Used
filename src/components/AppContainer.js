import React, { Component } from 'react';
import axios from 'axios';
import ComponentPostarProduto from './ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro/Index';
import Footer from "./Footer/Index";
import Header from "./CardHeader/Index";
import CardCategoria from './CardCategoria/CardCategoria';
import PaginaCategoria from './CardCategoria/PaginaCategoria';
import Carrinho from './Carrinho'

export class AppContainer extends Component {

  state = {
    paginaAtual: "Inicio",
    valorInputMin: "",
    valorInputMax: "",
    valorCategoria: "",
    listaDeProdutos: [],
    listaDeProdutosFiltrados: []
  }

  componentDidMount = () => {
    this.listarProdutos();
  }

  onChangeValorMin = (e) => {
    this.setState({valorInputMin: e.target.value})
    console.log(this.state.valorInputMin)
  }

  onChangeValorMax = (e) => {
    this.setState({valorInputMax: e.target.value})
    console.log(this.state.valorInputMax)
  }

  onChangeValorCategoria = (e) => {
    this.setState({valorCategoria: e.target.value})
    console.log(this.state.valorCategoria)
  }

  listarProdutos = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
    .then( response => {
      this.setState({ listaDeProdutos: response.data.products });
    })
    .catch( err => {
      console.log(err.message);
    })
  }


  mudaPagina = (a) => {
    switch(a) {
      case "Vender":
        this.setState({ paginaAtual: "Vender"});
        break;
      case "Carrinho":
        this.setState({ paginaAtual: "Carrinho"});
        break;  
      case "Roupas":
        this.setState({ paginaAtual: "Roupas"});
        break;  
      case "Calcados":
        this.setState({ paginaAtual: "Calcados"});
        break;  
      case "Acessórios":
        this.setState({ paginaAtual: "Acessórios"});
        break;  
      case "Outros":
        this.setState({ paginaAtual: "Outros"});
        break;  
      default:
        this.setState({ paginaAtual: "Inicio" });
    }
  }

  render() {
    let itensFiltrados = this.state.listaDeProdutos

    if(this.state.valorInputMin !== "") {
      itensFiltrados = itensFiltrados.filter((elemento) => {
        return elemento.price >= this.state.valorInputMin ? true : false
      })
    }
    if(this.state.valorInputMax !== "") {
      itensFiltrados = itensFiltrados.filter((elemento) => {
        return elemento.price <= this.state.valorInputMax ? true : false
      })
    }

    console.log(this.state.valorInputMin)

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
          <ComponentFiltro mudaPagina={this.mudaPagina} valorMin={this.state.valorInputMin} valorMax={this.state.valorInputMax} onChangeValorMin={this.onChangeValorMin} onChangeValorMax={this.onChangeValorMax} />
          <CardCategoria mudaPagina={this.mudaPagina} lista={itensFiltrados}/>  
        </div>
      break; 
    case 'Roupas':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos}/>     
      break; 
    case 'Calcados':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos}/>     
      break; 
    case 'Acessórios':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos}/>     
      break; 
    case 'Outros':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos}/>     
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

