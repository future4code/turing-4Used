import React, { Component } from 'react'
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const ContainerCadastrarProdutos = styled.div `
    width: 500px;
    min-height: 90vh;
    margin: 0 auto;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
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


export class ComponentPostarProduto extends Component {
    state = {
        produto: [
    ],

    inputNameValue: "",
    inputDescriptionValue: "",
    inputPriceValue: "",
    inputCartaoValue: "",
    inputParcelasValue: "",
    inputPhotosValue: [],
    inputCategoriaValue: "",

    };

    criarProduto = () => {
    
        const body = {
            name: this.state.inputNameValue,
            description: this.state.inputDescriptionValue ,
            price: this.state.inputPriceValue,
            paymentMethod: this.state.inputCartaoValue,
            category: this.state.inputCategoriaValue,
            photos: this.state.inputPhotosValue,
            installments: this.state.inputParcelasValue
        }
        axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products", body
        )
        .then(() => {
            alert('Produto cadastrado com sucesso!')
        }).catch(error => {
            console.log(error.message)
        })
    }


    changeInputNameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    changeInputDescriptionValue = (e) => {
        this.setState({inputDescriptionValue: e.target.value})     
    }

    changeInputPriceValue = (e) => {
        this.setState({inputPriceValue: e.target.value})
    }

    changeInputCartaoValue = (e) => {
        this.setState({inputCartaoValue: e.target.value})      
    }

    changeInputParcelasValue = (e) => {
        this.setState({inputParcelasValue: e.target.value})      
    }

    changeInputPhotosValue = (e) => {
        this.setState({inputPhotosValue: [...this.state.inputPhotosValue, e.target.value]})      
    }

    changeInputCategoriaValue = (e) => {
        this.setState({inputCategoriaValue: e.target.value})      
    }


  render() {
    return (
        <ContainerCadastrarProdutos>
            <h1>Incluir Produto</h1>
           
            <TextField
                id="Name"
                label="Nome do produto"
                variant="outlined"
                value={this.state.produto.name}
                onChange={this.changeInputNameValue}
            />
            <TextField
                id="Name"
                label="Descrição"
                variant="outlined"
                value={this.state.produto.description}
                onChange={this.changeInputDescriptionValue}
            />
            <TextField
                id="Name"
                label="Preço"
                variant="outlined"
                type="number"
                value={this.state.produto.price}
                onChange={this.changeInputPriceValue}
            />


            <h3>Método de pagamento</h3>
            <Select value={this.state.inputCartaoValue} onChange={this.changeInputCartaoValue}>
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value="debito">Cartão de débito</MenuItem>
                <MenuItem value="credito">Cartão de crédito</MenuItem>
                <MenuItem value="boleto">Boleto</MenuItem>
            </Select>

            <h3>Parcelas</h3>
            <Select value={this.state.inputParcelasValue} onChange={this.changeInputParcelasValue}>
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1x</MenuItem>
                <MenuItem value={6}>6x</MenuItem>
                <MenuItem value={12}>12x</MenuItem>
            </Select>

            <h3>Categoria</h3>
            <Select value={this.state.inputCategoriaValue} onChange={this.changeInputCategoriaValue}>
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={"Roupas"}>Roupas</MenuItem>
                <MenuItem value={"Calcados"}>Calçados</MenuItem>
                <MenuItem value={"Acessorios"}>Acessórios</MenuItem>
                <MenuItem value={"Outros"}>Outros</MenuItem>
            </Select>

            <h3>Imagens do produto</h3>
            <p>Clique ao lado para adicionar mais imagens</p>
            <ImagemEBotaoMaisFotos>
                <TextField
                    fullWidth
                    id="Name"
                    label="Link da imagem"
                    variant="outlined"
                    value={this.state.produto.photos}
                    onChange={this.changeInputPhotosValue}
                /> 
                <AdicionarMaisFotos>+</AdicionarMaisFotos>
            </ImagemEBotaoMaisFotos>
            <Button variant="contained" onClick={this.criarProduto}>
                Cadastrar
            </Button>
            
            <Button variant="contained" onClick={this.props.abreTelaDeletarProduto}>
                Apagar produto
            </Button>
            
        </ContainerCadastrarProdutos>
    )
  }
}

export default ComponentPostarProduto
