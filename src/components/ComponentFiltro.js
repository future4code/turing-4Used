import React, { Component } from 'react'
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles'; //estilo especial para o texto botão

const ContainerFiltro = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 58vw;
  padding: 8px;
  margin: 0 auto;
`;

const BotaoFiltrar = withStyles({ //estilo do botão para texto branco
  root: {
    color: 'white',
  },
})(Button);

export class ComponentFiltro extends Component {
  render() {   
    return (
      <div>
        <ContainerFiltro>
          <TextField
            id="valor-min"
            label="Valor Mínimo"
            variant="outlined"
          />
          <TextField
            id="valor-max"
            label="Valor Máximo"
            variant="outlined"
          />
          <TextField
            id="categoria"
            label="Busca por categoria"
            variant="outlined"
            type="text"
          />
          <BotaoFiltrar size="small" color="primary" variant="contained">
            Filtrar
          </BotaoFiltrar>
        </ContainerFiltro>
      </div>
    )
  }
}

export default ComponentFiltro
