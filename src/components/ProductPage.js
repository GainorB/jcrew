import React, { Component } from 'react';

import api from './utils/api';

class ProductPage extends Component {
  state = {
    fetchedProduct: false,
    product: null,
  };

  parseProduct = product => {
    console.log('product', product);
  };

  render() {
    const { fetchedProduct, product } = this.state;
    if (!fetchedProduct) return <div>Loading Product..</div>;
    return <div>{this.parseProduct(product)}</div>;
  }
}

export default ProductPage;
