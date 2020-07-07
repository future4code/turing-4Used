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
  render() {
    return (
        <Total>
            <Car>
                <Cabecalho>
                    <h1>Seu Carrinho</h1>
                    <h3>Total: R$ 480,00</h3>
                </Cabecalho>
                <Paper>
                    <Table>
                        <TableBody>           
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nome do Produto
                                </TableCell>
                                <TableCell align="right">
                                    R$ 120,00
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nome do Produto
                                </TableCell>
                                <TableCell align="right">
                                    R$ 120,00
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nome do Produto
                                </TableCell>
                                <TableCell align="right">
                                    R$ 120,00
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nome do Produto
                                </TableCell>
                                <TableCell align="right">
                                    R$ 120,00
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>   
                        </TableBody>
                    </Table>
                </Paper>
                <Button variant="contained" color="primary" >Finalizar Compra</Button>
            </Car>
        </Total>
    )
  }
}
