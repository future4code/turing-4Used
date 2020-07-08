import React, { Component } from 'react';
import styled from 'styled-components'

import Chip from '@material-ui/core/Chip';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00FFFF"
      },
      secondary: {
        main:"#0000FF"
      }
    }
  })

  const Botaozao = withStyles({ //estilo do botão para texto branco
    root: {
      color: 'white',
    },
  })(Button);

const Total = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #F2F2F2;
`
const Detalhe = styled.div`
display: grid;
grid-template-columns: 3fr 2fr;
grid-template-rows: 1fr;
    width: 60vw;
    > * {
        margin: 10px;
    }
`
const Dados = styled.div`
    grid-column: 1/2;
`
const Imagens = styled.div`
    align-self: center;
    grid-column: 2/3;
`

export class DetalheProduto extends Component {
  render() {
    return (
        <Total>
            <Detalhe>
                <Dados>
                    <h1>{this.props.produto}</h1>
                    <Chip label={this.props.categoria} />
                    <p>{this.props.descricao}</p>
                    <h2>{this.props.preco}</h2>
                    <h3>Métodos de Pagamento</h3>
                    <RadioGroup
                        aria-label="position"
                        name="position"
                        // value={this.state.value}
                        // onChange={this.handleChange}
                        row
                    >
                        <FormControlLabel
                            value="top"
                            control={<Radio color="primary" />}
                            label="Cartão de Débito"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <Botaozao variant="contained" color="primary" >Adicionar ao Carrinho</Botaozao>
                </Dados>
                <Imagens>
                    <GridList cellHeight={100} cols={3}>
                        <GridListTile cols={3} rows={2}>
                            <img src="https://picsum.photos/300/210?random=1"/>
                        </GridListTile>
                        <GridListTile cols={1} rows={1}>
                            <img src="https://picsum.photos/100/100?random=2"/>
                        </GridListTile>
                        <GridListTile cols={1} rows={1}>
                            <img src="https://picsum.photos/100/100?random=3"/>
                        </GridListTile>
                        <GridListTile cols={1} rows={1}>
                            <img src="https://picsum.photos/100/100?random=4"/>
                        </GridListTile>
                        <GridListTile cols={1.5} rows={2}>
                            <img src="https://picsum.photos/150/200?random=5"/>
                        </GridListTile>
                        <GridListTile cols={1.5} rows={2}>
                            <img src="https://picsum.photos/150/200?random=6"/>
                        </GridListTile>
                    </GridList>
                </Imagens>
            </Detalhe>
        </Total>
    )
  }
}
