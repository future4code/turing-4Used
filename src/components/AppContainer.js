import React, { Component } from 'react'

import CardCategoria from './CardCategoria/CardCategoria';

export class AppContainer extends Component {

  state = {
    paginaAtual: "Inicio"
  }

  render() {

    const categorias = [
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

    const categoriasInicio = categorias.map( grupo => {
        return <CardCategoria categoria={grupo.titulo} textoCategoria={grupo.texto} pagina={this.state.paginaAtual}></CardCategoria>
      });
    
    const categoriasPagina = categorias.map( grupo => {
      if ( grupo.titulo === this.state.paginaAtual ) {
        return <CardCategoria categoria={grupo.titulo} textoCategoria={grupo.texto} pagina={this.state.paginaAtual}></CardCategoria>
      }
    });
    
    const mostrarProdutos = this.state.paginaAtual === "Inicio" ? categoriasInicio : categoriasPagina

    return (
      <div>
        {mostrarProdutos}
      </div>
    )
  }
}

