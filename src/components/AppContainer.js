import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ComponentPostarProduto from './ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro/Index';
import Footer from "./Footer/Index";
import Header from "./CardHeader/Index";
import CardCategoria from './CardCategoria/CardCategoria';
import PaginaCategoria from './CardCategoria/PaginaCategoria';
import Carrinho from './Carrinho'

const NumeroCarrinho = styled.p `
  width: 14px;
  height: 14px;
  margin-top: -16px;
  background-color: #cc1474;
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
  line-height: 16px;
`

export class AppContainer extends Component {

  state = {
    paginaAtual: "Inicio",
    valorInputMin: "",
    valorInputMax: "",
    valorCategoria: "",
    listaDeProdutos: [],
    produtosSelecionados: []
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

  colocaProdutoCarrinho = id => {
    const produtoSelecionado = this.state.listaDeProdutos.find(produto => {
      return produto.id === id
    })
    
    if( this.state.produtosSelecionados.includes(produtoSelecionado)) {
      alert("Você já adicionou esse produto no carrinho!")
    } else {
      alert("Produto adicionado com sucesso!")
      this.setState({ produtosSelecionados: [...this.state.produtosSelecionados, produtoSelecionado] });
    } 
  }

  onClickAbreCarrinho = () => {
    this.setState({ paginaAtual: "Carrinho" })
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
          <CardCategoria mudaPagina={this.mudaPagina} lista={itensFiltrados} onClickCompraProduto={this.colocaProdutoCarrinho} onClickAbreCarrinho={this.onClickAbreCarrinho}/>  
        </div>
      break; 
    case 'Roupas':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos} onClickCompraProduto={this.colocaProdutoCarrinho} onClickAbreCarrinho={this.onClickAbreCarrinho}/>     
      break; 
    case 'Calcados':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos} onClickCompraProduto={this.colocaProdutoCarrinho} onClickAbreCarrinho={this.onClickAbreCarrinho}/>     
      break; 
    case 'Acessórios':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos} onClickCompraProduto={this.colocaProdutoCarrinho} onClickAbreCarrinho={this.onClickAbreCarrinho}/>     
      break; 
    case 'Outros':
      renderiza =
        <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual} lista={this.state.listaDeProdutos} onClickCompraProduto={this.colocaProdutoCarrinho} onClickAbreCarrinho={this.onClickAbreCarrinho}/>     
      break;
    case 'Carrinho':
      renderiza =
        <Carrinho mudaPagina={this.mudaPagina} produtosSelecionados={this.state.produtosSelecionados} onClickAbreCarrinho={this.colocaProdutoCarrinho} />     
      break;
    default: 
    renderiza =
      <ComponentFiltro mudaPagina={this.mudaPagina} />
  }

const numeroProdutosCarrinho = (this.state.produtosSelecionados.length !== 0) ? <NumeroCarrinho>{this.state.produtosSelecionados.length}</NumeroCarrinho> : null;

  return (
      <div>
        <Header mudaPagina={this.mudaPagina} produtosCarrinho={numeroProdutosCarrinho}/>
        {renderiza}
        <Footer />
      </div>
    )
  }
}

