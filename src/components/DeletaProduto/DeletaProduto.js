import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { baseUrl } from '../../constants/index.js';

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
    minWidth: 250,
    height: '100%',
    position: 'relative',
    margin: 4,
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

const IconContainer = styled.div `
  width: calc(100% - 16px);
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DeleteContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`
const Titulo = styled.h1 `
  text-align: center;
  width: 100%;
`

class DeletaProduto extends React.Component{
  state= {
    listaDeProdutos: []
  }

  componentDidMount = () => {
    this.listarProdutos()
  }

  listarProdutos = () => {
    axios.get(baseUrl)
    .then( response => {
      this.setState({ listaDeProdutos: response.data.products });
    })
    .catch( err => {
      console.log(err.message);
    })
  }

  deletaProdutos = (produtoId, nome) => {
    let r= window.confirm('Tem certeza de que deseja apagar o produto ' + nome + '?') ;
    if (r===true){
      axios.delete(`${baseUrl}/${produtoId}`)
        .then( response => {
          alert("Item apagado com sucesso")
          this.listarProdutos()
        })
        .catch( err => {
          console.log(err.message);
        })
    }
  }

  render(){
    const { classes } = this.props;
    return (
		  <DeleteContainer>
        <Titulo>Escolha um produto para deletar</Titulo>
        {this.state.listaDeProdutos.map(produto =>{
          return(
            <Card className={classes.card} theme={tema}>
              <CardContent>
                <CardMedia
                className={classes.media}
                image={produto.photos}
                />
              </CardContent>
              <IconContainer>
                <Chip label={produto.name} className={classes.chip} />
                <IconButton onClick={() => this.deletaProdutos(produto.id, produto.name)}>   
                  <DeleteIcon size="medium" color="secondary"/>
                </IconButton>
              </IconContainer>
            </Card>
          )
        })}
		  </DeleteContainer>
    )
  }
}

DeletaProduto.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DeletaProduto)