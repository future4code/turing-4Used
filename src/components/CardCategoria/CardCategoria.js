import React from 'react';
import {Container, CardsHeader, GridProdutos, GridItem, styles} from "./styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardProduto from '../CardProduto/CardProduto';

export class CardCategoria extends React.Component {
  render (){
    const { classes } = this.props;
    const grupoCategorias = [
      {
        titulo: "Roupas",
        texto: "Roupas, muitas roupas, de todas as cores"
      },
      {
        titulo: "Calçados",
        texto: "Calçados, muitas calçados, de todas as cores"
      },
      {
        titulo: "Acessórios",
        texto: "Acessórios, muitos acessórios, de todas as cores"
      },
      {
        titulo: "Outros",
        texto: "Muitas outras coisas, de todas as cores"
      }
    ]
    const categoriasProdutos = grupo => {
      const listaProdutosDaCategoria = this.props.lista.filter( (item, idx) => {
        if ( item.category === grupo) {
          return item.category;
        }
        return false
      });
      const limiteProdutos = listaProdutosDaCategoria.map( (item, idx) => {
        if ( idx < 6 ) {
          return <GridItem key={idx}>
            <CardProduto 
              imagem={item.photos} 
              imagemPrincipal={item.photos[0]} 
              preco={"R$ " + item.price} 
              id={item.id}
              lista={this.listarProdutos}
              produtoNome = {item.name}
              produtoCategoria = {item.category}
              produtoDescricao = {item.description}
              produtoPagamento = {item.paymentMethod}
              produtoParcelas = {item.installments}
              onClickCompraProduto = {()=>this.props.onClickCompraProduto(item.id)}
              onClickAbreCarrinho = {this.props.onClickAbreCarrinho}
            />
        </GridItem>
        }
        return false
      });
      return limiteProdutos;
    }
    return (
      <>
        {grupoCategorias.map((grupo, index) => {
          return (
            <Container key={index}>
              <CardsHeader>
              <Typography variant="h3" className={classes.titulo}>
                {grupo.titulo}
              </Typography>
              <Typography variant="subheading" className={classes.subtitulo}>
                {grupo.nome}
              </Typography>
              <Divider variant="inset" className={classes.fio} />
              </CardsHeader>
              <GridProdutos>
                {categoriasProdutos(grupo.titulo)}
              </GridProdutos>
            </Container>
          )
          })
        }
      </>
    );
  }
}
CardCategoria.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardCategoria);