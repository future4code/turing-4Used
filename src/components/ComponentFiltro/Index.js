import React, { Component } from 'react'
import {ComponentFiltroContainer, ContainerFiltro, Banner} from "./styles";
import banner from "./img/banners-inverno.png";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles'; //estilo especial para o texto botão

const BotaoFiltrar = withStyles({ //estilo do botão para texto branco
  root: {
    color: 'white',
  },
})(Button);

export class ComponentFiltro extends Component {
  render() {   
    return (
      <ComponentFiltroContainer>
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
        <Banner>
            <img src={banner} alt="Banner" />
        </Banner>
      </ComponentFiltroContainer>
    )
  }
}

export default ComponentFiltro