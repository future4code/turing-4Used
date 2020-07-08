import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CardProduto from '../CardProduto/CardProduto';

const Container = styled.div `
  max-width: 1024px;
  margin: 80px auto;
`

const GridProdutos = styled.div `
  max-width: 1024px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`

const GridItem = styled.div `
  &:nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
  }
  &:nth-child(2) {
    grid-area: 1 / 3 / 2 / 4;
  }
  &:nth-child(3) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
  }
  &:nth-child(5) {
    grid-area: 2 / 4 / 3 / 5;
  }
  &:nth-child(6) {
    grid-area: 1 / 5 / 3 / 7;
  }
`

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

export class CardCategoria extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1231,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 1232,
        categoria: "Roupas",
        Produto: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1233,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1234,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1235,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1236,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 1237,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 1238,
        categoria: "Calçados",
        Produto: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1239,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1240,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1241,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 1242,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
    ],
    paginaAtual: this.props.pagina || "Inicio"
  }

  render (){
    const { classes } = this.props;

    const itensCategoria = this.state.listaDeProdutos.filter( item => {
      if ( this.props.categoria === item.categoria) {
        return item
      }
    });

    const categoriasInicio = itensCategoria.map( (produto, idx) => {
      if ( idx < 6 ) {
        return <GridItem>
          <CardProduto 
            imagem={produto.imagens[0]} 
            preco={produto.preco} 
          />
      </GridItem>
      }
    });

    const categoriasPagina = itensCategoria.map( item => {
        return <GridItem key={item.id}>
          <CardProduto 
            imagem={item.imagens[0]} 
            preco={item.preco} 
          />
      </GridItem>
    });

    const mostrarProdutos = this.state.paginaAtual === "Inicio" ? categoriasInicio : categoriasPagina

    return (
      <MuiThemeProvider theme={tema}>
        <Container>
          <Typography variant="h3" className={classes.titulo}>
          {this.props.categoria}
          </Typography>
          <Typography variant="subheading" className={classes.subtitulo}>
          {this.props.textoCategoria}
          </Typography>
          <Divider variant="inset" className={classes.fio} />
          <GridProdutos>
              {mostrarProdutos}
          </GridProdutos>
        </Container>
      </MuiThemeProvider>
    );
  }
}

CardCategoria.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardCategoria);