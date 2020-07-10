import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Close from '@material-ui/icons/Close';
import { Total, Detalhe, Dados, Imagens, BtnClose, PagamentoContainer, GridProdutos, GridItem, ItemImagem, Botaozao} from './styles';
export class DetalheProduto extends Component {
  state = {
    pagamentoSelecionado: true
  }
  render() {
    const metodosDePagamento = this.state.pagamentoSelecionado && (this.props.pagamento === "cartão de crédito")  ?
      <PagamentoContainer>
        <h3>Métodos de Pagamento</h3>
        <p>{this.props.parcelas}</p>
      </PagamentoContainer>
      : null
    return (
      <Total>
        <Detalhe>
        <BtnClose>
          <Close size="medium" color="primary" onClick={this.props.onClickFechaDetalhe} />
        </BtnClose>
          <Dados>
            <h1>{this.props.produto}</h1>
            <Chip label={this.props.categoria} />
            <p>{this.props.descricao}</p>
            <h2>{this.props.preco}</h2>
            <h3>Métodos de Pagamento</h3>
            <RadioGroup
              aria-label="position"
              name="position"
              row
            >
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label={this.props.pagamento}
                labelPlacement="start"
              />
            </RadioGroup>
            {metodosDePagamento}
            <Botaozao variant="contained" color="primary" onClick={this.props.onClickCompraProdutoDetalhe}>Adicionar ao Carrinho</Botaozao>
            <Botaozao variant="contained" color="primary" onClick={this.props.onClickIrParaCarrinho}>Ir para o Carrinho</Botaozao>
        </Dados>
        <Imagens>
            <GridProdutos>
            {this.props.imagens.map( (imagem, idx, arr) => {
              return <GridItem >
                <ItemImagem  src={imagem}/>
                </GridItem>
            })}
            </GridProdutos>
          </Imagens>
        </Detalhe>
      </Total>
    )
  }
}
