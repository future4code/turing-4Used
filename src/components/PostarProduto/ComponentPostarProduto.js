import React, { Component } from 'react'
import axios from 'axios';
import { ContainerCadastrarProdutos, ImagemEBotaoMaisFotos, AdicionarMaisFotos} from './styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { baseUrl } from '../../constants/index.js';

export class ComponentPostarProduto extends Component {
  state = {
    inputNameValue: "",
    inputDescriptionValue: "",
    inputPriceValue: "",
    inputCartaoValue: "",
    inputParcelasValue: "",
    inputPhotosValue: ["", "", "", "", ""],
    inputCategoriaValue: "",
    addImagens: ['ImagemEBotaoMaisFotos']
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
    axios.post (baseUrl, body)
    .then(() => {
      alert('Produto cadastrado com sucesso!');
      this.setState({ inputNameValue: "", inputDescriptionValue: "", inputPriceValue:"", inputCartaoValue:"", inputParcelasValue:"", inputPhotosValue:["", "", "", "", ""], inputCategoriaValue:""});
      this.props.atualizaProdutos();
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
      const index = e.target.id;
      const inputValue = this.state.inputPhotosValue.find( (input, idx) => {
        return idx == index
      })
      const novoInputsPhotosValue = this.state.inputPhotosValue.map( (input, idx) => {
        if( idx == index ) {
          const novoInput = e.target.value
          return novoInput
        } else {
            return input
        }
      })
      this.setState({inputPhotosValue: novoInputsPhotosValue})
    }
    changeInputCategoriaValue = (e) => {
      this.setState({inputCategoriaValue: e.target.value})      
    }
    adicionaImagem = () => {
      if(this.state.addImagens.length < 5) {
        let divAddImagens = this.state.addImagens;
        divAddImagens.push('novoAddImagens')
        this.setState({ addImagens: divAddImagens })
      }
    }
  render() {
    return (
      <ContainerCadastrarProdutos>
        <h1>Incluir Produto</h1>        
        <TextField
          id="Name"
          label="Nome do produto"
          variant="outlined"
          value={this.state.inputNameValue}
          onChange={this.changeInputNameValue}
        />
        <TextField
          id="Name"
          label="Descrição"
          variant="outlined"
          value={this.state.inputDescriptionValue}
          onChange={this.changeInputDescriptionValue}
        />
        <TextField
          id="Name"
          label="Preço"
          variant="outlined"
          type="number"
          value={this.state.inputPriceValue}
          onChange={this.changeInputPriceValue}
        />
        <h3>Método de pagamento</h3>
        <Select value={this.state.inputCartaoValue} onChange={this.changeInputCartaoValue}>
          <MenuItem value="">
          <em>None</em>
          </MenuItem>
          <MenuItem value="Cartão de Débito">Cartão de débito</MenuItem>
          <MenuItem value="Cartão de Crédito">Cartão de crédito</MenuItem>
          <MenuItem value="Boleto Bancário">Boleto</MenuItem>
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
          <MenuItem value={"Acessórios"}>Acessórios</MenuItem>
          <MenuItem value={"Outros"}>Outros</MenuItem>
        </Select>
        <h3>Imagens do produto</h3>
        <p>Clique ao lado para adicionar mais imagens</p>
        {this.state.addImagens.map((divAddImagens, i) => {
          return <ImagemEBotaoMaisFotos key={divAddImagens} data-block={i}>
            <TextField
              fullWidth
              id={i}
              label="Link da imagem"
              variant="outlined"
              value={this.state.inputPhotosValue[i]}
              onChange={this.changeInputPhotosValue}
            /> 
            <AdicionarMaisFotos onClick={this.adicionaImagem}>+</AdicionarMaisFotos>
          </ImagemEBotaoMaisFotos>
          })}
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