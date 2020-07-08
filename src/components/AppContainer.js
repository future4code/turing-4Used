import React, { Component } from 'react'

import CardCategoria from './CardCategoria/CardCategoria';

export class AppContainer extends Component {
  state = {
    listaDeProdutos: [
      {
        id: 123,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 123,
        categoria: "Roupas",
        Produto: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Roupas",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 123,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
      {
        id: 123,
        categoria: "Calçados",
        Produto: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
      },
      {
        id: 123,
        categoria: "Calçados",
        nome: "Camiseta",
        descricao: "Camiseta masculina cor preta, tamanho G",
        preco: "R$120,00",
        imagens: ["https://www.usereserva.com/ccstore/v1/images/?source=/file/v4833326403729550636/products/0021813040_01.jpg"],
        cols: 2,
        rows: 2
      },
    ]
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

    return (
      <div>
        {
          categorias.map( grupo => {
            return <CardCategoria categoria={grupo.titulo} textoCategoria={grupo.texto} lista={this.state.listaDeProdutos}></CardCategoria>
          })
        }
        
      </div>
    )
  }
}

