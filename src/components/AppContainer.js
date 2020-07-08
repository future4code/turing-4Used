import React, { Component } from 'react'

import CardCategoria from './CardCategoria/CardCategoria';

export class AppContainer extends Component {

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

    return (
      <div>
        {
          categorias.map( grupo => {
            return <CardCategoria categoria={grupo.titulo} textoCategoria={grupo.texto}></CardCategoria>
          })
        }
        
      </div>
    )
  }
}

