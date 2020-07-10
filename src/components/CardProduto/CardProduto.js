import React from 'react';
import styled from 'styled-components';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ShoppingCart from '@material-ui/icons/ShoppingCart';

import detalheProduto, { DetalheProduto } from '../DetalheProduto/DetalheProduto';

const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#00BCD5"
      },
      secondary: {
        main: "#CC1474"
      },
      textPrimary: {
        main: "#FF0000"
      },
      textSecondary: {
        main: "#FFFFFF"
      },
    }
  });

const styles = {
  card: {
    maxWidth: 400,
    height: '100%',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '100%',
    marginTop: 16,
    cursor: 'pointer'
  },
  value: {
    fontWeight: 700
  },
  bottomCard: {
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
      display: "flex",
      aligmItems: "center",
      justifyContent: "space-between"
  },
  chip: {
    backgroundColor: '#00BCD5',
    color: '#FFFFFF',
    fontWeight: 700
  },
};

const PriceContainer = styled.div `
  width: calc(100% - 16px);
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  justify-content: space-between;
`

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
          <Card className={classes.card} theme={tema}>
            <CardContent onClick={this.mostrarDetalheProduto}>
              <CardMedia
              className={classes.media}
              image={this.props.imagemPrincipal}
              />
            </CardContent>
            <PriceContainer>
              <Chip label={this.props.preco} className={classes.chip} />
              <ShoppingCart size="medium" color="primary" onClick={this.props.onClickCompraProduto} />
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