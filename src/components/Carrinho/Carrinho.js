import React, { Component } from 'react';
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Total = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
const Car = styled.div`
  width: 60vw;
  > * {
    margin: 10px;
  }
`
const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BotaoFinaliza = withStyles({ //estilo do botão para texto branco
  root: {
    color: 'white',
  },
})(Button);

export class Carrinho extends Component {
  state= {
    produto: this.props.produtosSelecionados || [],
    total: 0
  }

  componentDidMount = () => {
    let valorTotal = 0
    this.state.produto.forEach((produto) => {
      valorTotal += produto.price
      this.setState({total: valorTotal})
    })
  }

  onClickFinalizarCompra = () => {
    alert("Obrigado por comprar conosco! Volte sempre.")
    this.setState({produto: []})
  }

  onClickDeletaProdutoDoCarrinho = (prodId, prodPrice) => {
    let diminuiPreco = this.state.total
    const novosprodutos = this.state.produto.filter((produto, indice, array) => {
      if(produto.id === prodId){
        diminuiPreco = diminuiPreco - prodPrice
        this.setState({total: diminuiPreco})
        return false
      }
      return true
    })
    this.setState({produto: novosprodutos})
    this.props.onClickDeletaProduto(prodId);
  }

  render() {
    const carrinhoComProdutos = <Car>
      <Cabecalho>
        <h1>Seu Carrinho</h1>
        <h3>Total: R$ {this.state.total}</h3>
      </Cabecalho>
      <Paper>
        <Table>
          <TableBody>   
            {this.state.produto.map(prod => (         
              <TableRow>
                <TableCell component="th" scope="row">
                  {prod.name}
                </TableCell>
                <TableCell align="right">
                  R$ {prod.price}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick= {() => this.onClickDeletaProdutoDoCarrinho(prod.id, prod.price)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>                 
            ))}  
          </TableBody>
        </Table>
      </Paper>
      <BotaoFinaliza variant="contained" color="primary" onClick= {this.onClickFinalizarCompra}>Finalizar Compra</BotaoFinaliza>
    </Car>

    const carrinhoSemProdutos = <Car>
      <h2>Ainda não tem produtos adicionados no seu carrinho</h2>
    </Car>

    return (
      <Total>
        {this.state.produto.length !== 0 ? carrinhoComProdutos : carrinhoSemProdutos}
      </Total>
    )
  }
}
export default Carrinho