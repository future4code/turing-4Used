import React, { Component } from 'react';
import {Total, Car, Cabecalho, BotaoFinaliza} from "./styles";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export class Carrinho extends Component {
  componentDidMount = () => {
    this.props.somaTotal()
  }
  render() {
    const carrinhoComProdutos = <Car>
      <Cabecalho>
        <h1>Seu Carrinho</h1>
        <h3>Total: R$ {this.props.total}</h3>
      </Cabecalho>
      <Paper>
        <Table>
          <TableBody>   
            {this.props.produtosSelecionados.map(prod => (         
              <TableRow>
                <TableCell component="th" scope="row">
                  {prod.name}
                </TableCell>
                <TableCell align="right">
                  R$ {prod.price}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick= {() => this.props.onClickDeletaProdutoDoCarrinho(prod.id, prod.price)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>                 
            ))}  
          </TableBody>
        </Table>
      </Paper>
      <BotaoFinaliza variant="contained" color="primary" onClick= {this.props.onClickFinalizarCompra}>Finalizar Compra</BotaoFinaliza>
    </Car>
    const carrinhoSemProdutos = <Car>
      <h2>Ainda não tem produtos adicionados no seu carrinho</h2>
    </Car>
    return (
      <Total>
        {this.props.produtosSelecionados.length !== 0 ? carrinhoComProdutos : carrinhoSemProdutos}
      </Total>
    )
  }
}
export default Carrinho