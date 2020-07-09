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
  state = {
    
  }

  

  render() {   



    
    return (
      <ComponentFiltroContainer>
        <ContainerFiltro>
          <TextField
            onChange={this.props.onChangeValorMin}
            value={this.props.valorMin}
            id="valor-min"
            label="Valor Mínimo"
            variant="outlined"
          />
          <TextField
            onChange={this.props.onChangeValorMax}
            value={this.props.valorMax}
            id="valor-max"
            label="Valor Máximo"
            variant="outlined"
          />
          <TextField
            onChange={this.onChangeValorCategoria}
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
