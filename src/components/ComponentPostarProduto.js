import React, { Component } from 'react'
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const ContainerCadastrarProdutos = styled.div `
    width: 500px;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MetodosDePagamento = styled.div `
    display: flex;
    justify-content: space-between;
`;

const ImagemEBotaoMaisFotos = styled.div `
    display: flex;
    justify-content: space-between;
`;

const AdicionarMaisFotos = styled.span `
    font-size: 35px;
    line-height: 45px;
`;

const ContainerCriaçãoProduto = styled.div `
    
`;

export class ComponentPostarProduto extends Component {
  render() {
    return (
      <ContainerCriaçãoProduto>
        <ContainerCadastrarProdutos>
            <h1>Incluir Produto</h1>
            <TextField
                id="Name"
                label="Nome do produto"
                variant="outlined"
            />
            <TextField
                id="Name"
                label="Descrição"
                variant="outlined"
            />
            <TextField
                id="Name"
                label="Preço"
                variant="outlined"
                type="number"
            />

            <h3>Métodos de pagamento</h3>
            <MetodosDePagamento>
                <FormControlLabel
                control={
                    <Checkbox value="debito" />
                } 
                label="Cartão de débito"
                />
                <FormControlLabel
                control={
                    <Checkbox value="credito" />
                } 
                label="Cartão de crédito"
                />
                <FormControlLabel
                control={
                    <Checkbox value="boleto" />
                } 
                label="Boleto"
                />
            </MetodosDePagamento>

            <h3>Parcelas</h3>
            <Select
                // value={this.state.age}
                // onChange={this.handleChange}
                // inputProps={{
                // name: 'age',
                // id: 'age-simple',
                // }}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1x</MenuItem>
                <MenuItem value={6}>6x</MenuItem>
                <MenuItem value={12}>12x</MenuItem>
            </Select>

            <h3>Categoria</h3>
            <Select
                // value={this.state.age}
                // onChange={this.handleChange}
                // inputProps={{
                // name: 'age',
                // id: 'age-simple',
                // }}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={"roupas"}>Roupas</MenuItem>
                <MenuItem value={"calcados"}>Calçados</MenuItem>
                <MenuItem value={"acessorios"}>Acessórios</MenuItem>
                <MenuItem value={"outros"}>Outros</MenuItem>
            </Select>

            <h3>Imagens do produto</h3>
            <p>Clique ao lado para adicionar mais imagens</p>
            <ImagemEBotaoMaisFotos>
                <TextField
                    fullWidth
                    id="Name"
                    label="Link da imagem"
                    variant="outlined"
                /> <AdicionarMaisFotos>+</AdicionarMaisFotos>
            </ImagemEBotaoMaisFotos>
            <Button variant="contained">
                Cadastrar
            </Button>
            
        </ContainerCadastrarProdutos>
      </ContainerCriaçãoProduto>
    )
  }
}

export default ComponentPostarProduto
