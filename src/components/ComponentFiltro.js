import React, { Component } from 'react'
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContainerFiltro = styled.div `
    width: 750px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;



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
      <div>
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
                <Button variant="contained">
                    Filtrar
                </Button>
            </ContainerFiltro>
      </div>
    )
  }
}

export default ComponentFiltro
