import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";


const ProductContext = React.createContext(); //provider and consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  
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