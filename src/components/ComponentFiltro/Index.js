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
    valorInputMin: "",
    valorInputMax: "",
    valorCategoria: "",
  }

  onChangeValorMin = (e) => {
    this.setState({valorInputMin: e.target.value})
    console.log(this.state.valorInputMin)
  }

  onChangeValorMax = (e) => {
    this.setState({valorInputMax: e.target.value})
    console.log(this.state.valorInputMax)
  }

  onChangeValorCategoria = (e) => {
    this.setState({valorCategoria: e.target.value})
    console.log(this.state.valorCategoria)
  }
  render() {   
    return (
      <ComponentFiltroContainer>
        <ContainerFiltro>
          <TextField
            onChange={this.onChangeValorMin}
            id="valor-min"
            label="Valor Mínimo"
            variant="outlined"
          />
          <TextField
            onChange={this.onChangeValorMax}
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
