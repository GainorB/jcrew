import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// UTILS
import { key } from './utils';
import api from './utils/api';

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
      this.setState({ productsLoaded: false });
      const parseGender = this.handleGender(match.params.gender);
      this.fetchProducts(parseGender);
    }
  };

  fetchProducts = async gender => {
    try {
      const { productList } = await api.fetchProducts(gender);
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
    const { match } = this.props;
    const output = productList.map(e =>
      e.products.map(p => (
        <Link to={`/${match.params.gender}/${p.productCode}`} key={key()}>
          <ProductDetails>
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
        </Link>
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
