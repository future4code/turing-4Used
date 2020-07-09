import React from 'react';
import axios from 'axios';

import {Container, CardsHeader, GridProdutos, GridItem} from "./styles";

import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CardProduto from '../CardProduto/CardProduto';
import Axios from 'axios';

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
  titulo: {
    marginBottom: 8
  },
  subtitulo: {
    marginBottom: 8
  },
  fio: {
    marginLeft: 0
  }
};

 
// case 'Calcados':
//   renderiza =
//     <PaginaCategoria mudaPagina={this.mudaPagina} paginaCategoria={this.state.paginaAtual}/>     
//   break; 

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
      const listaProdutosDaCategoria = this.props.lista.map( (item, idx) => {
        if ( item.category === grupo) {
          return <GridItem>
            <CardProduto 
              imagem={item.photos} 
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
      });

      return listaProdutosDaCategoria;
    }


    return (
      <MuiThemeProvider theme={tema}>
        {console.log(this.props.paginaCategoria)}
          {grupoCategorias.map( grupo => {
            if ( this.props.paginaCategoria.substring(1, 3) === grupo.titulo.substring(1, 3) ) {
              return (
                <Container>
  
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
            }
          })
          }
      </MuiThemeProvider>
    );
  }
}

CardCategoria.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardCategoria);