import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UTILS
import { key } from './utils';

// CSS
import { ProductsWrapper, ProductDetails } from './Styled';

class Products extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    productsLoaded: false,
    productList: null,
  };

  componentDidMount = () => {
    const { match } = this.props;
    const parseGender = this.handleGender(match.params.gender);
    this.fetchProducts(parseGender);
  };

  componentDidUpdate = prevProps => {
    const { match } = this.props;
    if (match.params.gender !== prevProps.match.params.gender) {
      const parseGender = this.handleGender(match.params.gender);
      this.fetchProducts(parseGender);
    }
  };

  fetchProducts = async gender => {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    const ENDPOINT = `https://www.jcrew.com/data/v1/US/enhance-category/c/${gender}_feature/newarrivals`;
    try {
      const request = await fetch(PROXY + ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const { productList } = await request.json();
      this.setState({ productsLoaded: true, productList });
    } catch (error) {
      console.log('error', error);
    }
  };

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

  parseProducts = productList => {
    console.log('productList', productList);
    const output = productList.map(e =>
      e.products.map(p => (
        <ProductDetails key={key()}>
          <div className="hover__image">
            <div className="hover__image-off">
              <img
                src={`https://www.jcrew.com/s7-img-facade/${p.productCode}_${p.defaultColorCode}_d1`}
                alt={p.productDescription}
              />
            </div>
            <div className="hover__image-on">
              <img
                src={`https://www.jcrew.com/s7-img-facade/${p.productCode}_${p.defaultColorCode}_d2`}
                alt={p.productDescription}
              />
            </div>
          </div>
          <div className="product__brand">{p.brand}</div>
          <div className="product__price">{p.listPrice.formatted}</div>
          <div className="product__desc">{p.productDescription}</div>
        </ProductDetails>
      ))
    );
    return <ProductsWrapper>{output}</ProductsWrapper>;
  };

  render() {
    const { productList, productsLoaded } = this.state;
    if (!productsLoaded) return <div>Products Loading..</div>;
    return <div>{productsLoaded && this.parseProducts(productList)}</div>;
  }
}

export default Products;
