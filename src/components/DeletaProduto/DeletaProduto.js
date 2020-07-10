import React from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { baseUrl } from '../../constants/index.js';
import { styles, IconContainer, DeleteContainer, Titulo} from './styles';

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
            <Card className={classes.card}>
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