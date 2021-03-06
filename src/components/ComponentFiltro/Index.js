import React, { Component } from 'react'
import {ComponentFiltroContainer, ContainerFiltro, Banner, styles} from "./styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import banner from "./img/banners-inverno.png";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
export class ComponentFiltro extends Component {
  render() {   
    const { classes } = this.props;   
    return (
      <ComponentFiltroContainer>
          <Banner>
            <img src={banner} alt="Banner" />
          </Banner>
        <ContainerFiltro>
          <TextField
            onChange={this.props.onChangeValorMin}
            value={this.props.valorMin}
            type="number"
            id="valor-min"
            label="Valor Mínimo"
            variant="outlined"
          />
          <TextField
            onChange={this.props.onChangeValorMax}
            value={this.props.valorMax}
            id="valor-max"
            type="number"
            label="Valor Máximo"
            variant="outlined"
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-simple">Ordenar</InputLabel>
            <Select
              labelid="ordenacao"
              value={this.props.valorInputOrdenacao}
              onChange={this.props.onChangeOrdenacao}
              input={<OutlinedInput id="outlined-age-simple"/>}            >
              <MenuItem value="">
                Ordenar
              </MenuItem>
              <MenuItem value={this.props.valorNome}>Nome</MenuItem>
              <MenuItem value={"valor"}>Valor</MenuItem>
            </Select>
          </FormControl>
        </ContainerFiltro>
      </ComponentFiltroContainer>
    )
  }
}
ComponentFiltro.propTypes={
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ComponentFiltro);
