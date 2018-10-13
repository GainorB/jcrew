import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from './utils/api';

// CSS
import { SingleProduct } from './Styled';

// UTILS
import { key } from './utils/index';

class ProductPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    fetchedProduct: false,
    product: null,
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const product = await api.fetchProduct(match.params.productCode);
    this.setState({ fetchedProduct: true, product });
  };

  parseProduct = product => (
    // console.log('product', product);
    <SingleProduct>
      <div className="product__image">
        <img
          src={`https://www.jcrew.com/s7-img-facade/${product.productCode}_${product.defaultColorCode}_d1`}
          alt={product.productDescription}
        />
      </div>
      <div className="product__sizes">
        <h3>Available Sizes</h3>
        <ul>
          {product.sizesList.map(s => (
            <li key={key()}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="product__price">
        <h4>{product.listPrice.formatted}</h4>
      </div>
      <div className="product__romance">{product.productDescriptionRomance}</div>
    </SingleProduct>
  );

  render() {
    const { fetchedProduct, product } = this.state;
    if (!fetchedProduct) return <div>Loading Product..</div>;
    return <div>{this.parseProduct(product)}</div>;
  }
}

export default ProductPage;
