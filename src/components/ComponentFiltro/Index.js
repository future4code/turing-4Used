import React, { Component } from 'react'
import {ComponentFiltroContainer, ContainerFiltro, Banner} from "./styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import banner from "./img/banners-inverno.png";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const styles = {
  formControl: {
    width: 150,
  }
}


export class ComponentFiltro extends Component {
  state = {
      
  }

  render() {   
    const { classes } = this.props;


    
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-simple">Ordenar</InputLabel>
            <Select
              labelId="ordenacao"
              value={this.props.valorInputOrdenacao}
              onChange={this.props.onChangeOrdenacao}
              input={
                <OutlinedInput
                id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
              Ordenar
              </MenuItem>
              <MenuItem value={this.props.valorNome}>Nome</MenuItem>
              <MenuItem value={"valor"}>Valor</MenuItem>
            </Select>
          </FormControl>
        </ContainerFiltro>
        <Banner>
            <img src={banner} alt="Banner" />
        </Banner>
      </ComponentFiltroContainer>
    )
  }
}
ComponentFiltro.propTypes={
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentFiltro);
