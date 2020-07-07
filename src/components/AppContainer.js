import React, { Component } from 'react';
import ComponentPostarProduto from './ComponentPostarProduto';
import ComponentFiltro from './ComponentFiltro';

export class AppContainer extends Component {
  render() {
    
    return (
      <div>
        <ComponentFiltro />
        <ComponentPostarProduto />
      </div>
    )
  }
}
