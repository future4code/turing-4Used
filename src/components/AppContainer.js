import React, { Component } from 'react';
import axios from 'axios';
import ComponentPostarProduto from './PostarProduto/ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro/Index';
import Footer from "./Footer/Index";
import Header from "./CardHeader/Index";
import CardCategoria from './CardCategoria/CardCategoria';
import PaginaCategoria from './CardCategoria/PaginaCategoria';
import Carrinho from './Carrinho/Carrinho'
import DeletaProduto from './DeletaProduto/DeletaProduto'
import { baseUrl } from '../constants/index.js';
import {NumeroCarrinho} from './styles'

export class AppContainer extends Component {
  state = {
    paginaAtual: "Inicio",
    valorInputMin: "",
    valorInputMax: "",
    valorCategoria: "",
    valorInputOrdenacao: "",
    listaDeProdutos: [],
    produtosSelecionados: [],
    total: 0
  }
  componentDidMount = () => {
    this.listarProdutos();
  }
  onChangeOrdenacao = (e) => {
    this.setState({valorInputOrdenacao: e.target.value})
    switch (e.target.value) {
      case 'nome':
        this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a, b) => {
          if(b.name > a.name) {
            return -1;
          }
          return true
        })})
        break;
      case 'valor':
        this.setState({listaDeProdutos: this.state.listaDeProdutos.sort((a, b) => {
          return a.price - b.price
          })})
        break;  
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
    axios.get(baseUrl)
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
  onClickFinalizarCompra = () => {
    alert("Obrigado por comprar conosco! Volte sempre.")
    this.setState({produtosSelecionados: []})
  }
  onClickDeletaProdutoDoCarrinho = (prodId, prodPrice) => {
    let diminuiPreco = this.state.total
    const novosprodutos = this.state.produtosSelecionados.filter((produto, indice, array) => {
      if(produto.id === prodId){
        diminuiPreco = diminuiPreco - prodPrice
        this.setState({total: diminuiPreco})
        return false
      }
      return true
    })
    this.setState({produtosSelecionados: novosprodutos});
    this.listarProdutos();
  }
  somaTotal = () => {
    let valorTotal = 0
    this.state.produtosSelecionados.forEach((produto) => {
      valorTotal += parseFloat(produto.price)
      this.setState({total: valorTotal})
    })
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
        return parseFloat(elemento.price) >= this.state.valorInputMin ? true : false
      })
    }
    if(this.state.valorInputMax !== "") {
      itensFiltrados = itensFiltrados.filter((elemento) => {
        return parseFloat(elemento.price) <= this.state.valorInputMax ? true : false
      })
    }
    let renderiza = "";
    switch (this.state.paginaAtual) {
    case 'Vender':
      renderiza =
        <ComponentPostarProduto mudaPagina={this.mudaPagina} abreTelaDeletarProduto={this.abreTelaDeletarProduto} />
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
        <Carrinho mudaPagina={this.mudaPagina} produtosSelecionados={this.state.produtosSelecionados} onClickAbreCarrinho={this.colocaProdutoCarrinho} onClickDeletaProdutoDoCarrinho={this.onClickDeletaProdutoDoCarrinho} total={this.state.total} onClickFinalizarCompra={this.onClickFinalizarCompra} somaTotal={this.somaTotal}/>     
      break;
    case 'Deletar':
      renderiza =
        <DeletaProduto />     
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

