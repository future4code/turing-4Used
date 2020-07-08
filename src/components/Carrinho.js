import React, { Component } from 'react';
import styled from 'styled-components'

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

export class Carrinho extends Component {
  state= {
    produto:[
      {
        id: "123",
        name: "Produto",
        description: "Esse é um produto muito legal!",
        price: 10,
        paymentMethod: "card",
        category: "Categoria 1",
        photos: ["https://picsum.photos/300/200"],
        installments: 3
      },
      {
        id: "321",
        name: "Produto",
        description: "Esse é um produto muito legal!",
        price: 20,
        paymentMethod: "card",
        category: "Categoria 1",
        photos: ["https://picsum.photos/300/200"],
        installments: 3
      },
      {
        id: "231",
        name: "Produto",
        description: "Esse é um produto muito legal!",
        price: 30,
        paymentMethod: "card",
        category: "Categoria 1",
        photos: ["https://picsum.photos/300/200"],
        installments: 3
      }
    ],
    total: 0
  }

  onClickFinalizarCompra = () => {
    alert("Obrigado por comprar conosco! Volte sempre.")
    this.setState({produto: []})
  }

  onClickDeletaProdutoDoCarrinho = (prodId) => {
    const novosprodutos = this.state.produto.filter((produto, indice, array) => {
      if(produto.id === prodId){
        this.state.total = 0
        return false
      }
      return true
    })
    this.setState({produto: novosprodutos})
  }

  render() {
    this.state.produto.forEach((produto) => {
      this.state.total += produto.price
    })

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
                  <IconButton onClick= {() => this.onClickDeletaProdutoDoCarrinho(prod.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>                 
            ))}  
          </TableBody>
        </Table>
      </Paper>
      <Button variant="contained" color="primary" onClick= {this.onClickFinalizarCompra}>Finalizar Compra</Button>
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
