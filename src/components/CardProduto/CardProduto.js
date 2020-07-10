import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import detalheProduto, { DetalheProduto } from '../DetalheProduto/DetalheProduto';
import {styles, PriceContainer} from "./styles";
import IconButton from '@material-ui/core/IconButton';

class CardProduto extends React.Component{
  state = {
    detalheProduto: false,
  }
  mostrarDetalheProduto = () => {
    this.setState({ detalheProduto: true })
  }
  fecharDetalheProduto = () => {
    this.setState({ detalheProduto: false })
  }
  abreCarrinho = () => {
    this.setState({ detalheProduto: false });
    this.props.onClickAbreCarrinho()
  }
  render() {
    const { classes } = this.props;
    const detalheProduto = this.state.detalheProduto ? <DetalheProduto 
      produto={this.props.produtoNome} 
      categoria={this.props.produtoCategoria} 
      descricao={this.props.produtoDescricao} 
      preco={this.props.preco} 
      imagens={this.props.imagem}
      pagamento={this.props.produtoPagamento} 
      parcelas={this.props.produtoParcelas}
      onClickFechaDetalhe={this.fecharDetalheProduto}
      onClickCompraProdutoDetalhe={this.props.onClickCompraProduto}
      onClickIrParaCarrinho={this.abreCarrinho}
    /> 
    : null; 
    return (
      <Card className={classes.card}>
        <CardContent onClick={this.mostrarDetalheProduto}>
          <CardMedia
            className={classes.media}
            image={this.props.imagemPrincipal}
          />
        </CardContent>
        <PriceContainer>
          <Chip label={this.props.preco} className={classes.chip} />
          <IconButton aria-label="Carrinho">
            <ShoppingCart size="medium" color="primary" onClick={this.props.onClickCompraProduto} />
          </IconButton>
        </PriceContainer>
        {detalheProduto}
      </Card>
    );
  }
}
CardProduto.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardProduto);