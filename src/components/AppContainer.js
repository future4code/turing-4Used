import React, { Component } from 'react';
import {NumeroCarrinho} from './styles';
import axios from 'axios';
import ComponentPostarProduto from './PostarProduto/ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro/Index';
import Footer from "./Footer/Index";
import Header from "./CardHeader/Index";
import CardCategoria from './CardCategoria/CardCategoria';
import PaginaCategoria from './CardCategoria/PaginaCategoria';
import Carrinho from './Carrinho/Carrinho'
import DeletaProduto from './DeletaProduto/DeletaProduto'

export class AppContainer extends Component {
  state = {
    paginaAtual: "Inicio",
    valorInputMin: "",
    valorInputMax: "",
    valorCategoria: "",
    valorInputOrdenacao: "",
    listaDeProdutos: [],
    produtosSelecionados: []
  }
  componentDidMount = () => {
    this.listarProdutos();
  }
  onChangeOrdenacao = (e) => {
    this.setState({valorInputOrdenacao: e.target.value}) 
    switch (e.target.value) {
      case 'nome':
        return this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a, b) => {
          if(b.name > a.name) {
            return -1;
          }
        })})
      case 'valor':
        return this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a, b) => {
          return a.price - b.price
        })})
      default:
        return this.listarProdutos()
    }
  }
  onChangeValorMin = (e) => {
    this.setState({valorInputMin: e.target.value})
  }
  onChangeValorMax = (e) => {
    this.setState({valorInputMax: e.target.value})
  }
  onChangeValorCategoria = (e) => {
    this.setState({valorCategoria: e.target.value})
  }
  listarProdutos = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
    .then( response => {
      this.setState({ listaDeProdutos: response.data.products });
    })
    .catch( err => {
      alert(err.message);
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
  deletaProdutoCarrinho = prodId => {
    const novoProdutosSelecionados = this.state.produtosSelecionados.filter( produto => {
      if( produto.id === prodId) {
        return produto.id !== prodId
      }
    })
    this.setState({ produtosSelecionados: novoProdutosSelecionados })
  }
  onClickAbreCarrinho = () => {
    this.setState({ paginaAtual: "Carrinho" })
  }
  abreTelaDeletarProduto = () => {
    this.setState({ paginaAtual: "Deletar" })
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
        <ComponentPostarProduto mudaPagina={this.mudaPagina} abreTelaDeletarProduto={this.abreTelaDeletarProduto} atualizaProdutos={this.listarProdutos} />
      break;
    case 'Inicio':
      renderiza =
        <div>
          <ComponentFiltro mudaPagina={this.mudaPagina} valorNome="nome" onChangeOrdenacao={this.onChangeOrdenacao}  valorInputOrdenacao={this.state.valorInputOrdenacao} valorMin={this.state.valorInputMin} valorMax={this.state.valorInputMax} onChangeValorMin={this.onChangeValorMin} onChangeValorMax={this.onChangeValorMax} />
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
        <Carrinho mudaPagina={this.mudaPagina} produtosSelecionados={this.state.produtosSelecionados} onClickAbreCarrinho={this.colocaProdutoCarrinho} onClickDeletaProduto={this.deletaProdutoCarrinho} />     
      break;
    case 'Deletar':
      renderiza =
        <DeletaProduto />     
      break;
    default: 
    renderiza =
      <ComponentFiltro mudaPagina={this.mudaPagina} />
  }
    const numeroProdutosCarrinho = 
      (this.state.produtosSelecionados.length !== 0) ? 
      <NumeroCarrinho>{this.state.produtosSelecionados.length}</NumeroCarrinho> : 
      null;

    return (
      <>
        <Header mudaPagina={this.mudaPagina} produtosCarrinho={numeroProdutosCarrinho}/>
        {renderiza}
        <Footer />
      </>
    )
  }
}

