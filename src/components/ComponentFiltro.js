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
                <Button variant="contained">
                    Filtrar
                </Button>
            </ContainerFiltro>
      </div>
    )
  }
}

export default ComponentFiltro
