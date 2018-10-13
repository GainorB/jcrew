import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    productsLoaded: false,
    products: null,
  };

  componentDidMount = async () => {
    const { gender } = this.props.match.params;
    const parseGender = this.handleGender(gender);
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const ENDPOINT = `https://www.jcrew.com/data/v1/US/enhance-category/c/${parseGender}_feature/newarrivals`;
    try {
      const request = await fetch(PROXY + ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const { productList } = await request.json();
      this.setStateAsync({ productsLoaded: true, products: productList });
    } catch (error) {
      console.log('error', error);
    }
  };

  setStateAsync = state =>
    new Promise(resolve => {
      this.setState(state, resolve);
    });

  handleGender = gender => {
    switch (gender) {
      case 'for_Women':
        return 'womens';
      case 'for_Men':
        return 'mens';
      case 'for_Girls':
        return 'girls';
      case 'for_Boys':
        return 'boys';
      default:
        break;
    }
  };

  parseProducts = products => {
    console.log(products);
  };

  render() {
    const { products, productsLoaded } = this.state;
    if (!productsLoaded) return <div>Products Loading..</div>;
    return <div>{productsLoaded && this.parseProducts(products)}</div>;
  }
}

export default Products;
