import React, { Component } from 'react'

const ProductContext = React.createContext(); //provider and consumer

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello context from">
      {this.props.chilren}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };