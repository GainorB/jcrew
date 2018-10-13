import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 10px;

  a:link,
  a:active,
  a:visited {
    text-decoration: none;
    color: #6e6e6e;
  }
`;

export const ProductDetails = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(3, auto);
  grid-gap: 10px;
  padding: 10px;
  border: 1px solid #f2f2f2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hover__image .hover__image-on,
  .hover__image:hover .hover__image-off {
    display: none;
  }

  .hover__image:hover .hover__image-on {
    display: inline;
  }

  .product__brand,
  .product__price,
  .product__desc {
    text-align: center;
    font-size: 20px;
  }

  .product__desc {
    font-weight: bold;
  }
`;

export const SingleProduct = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(3, auto);
  grid-gap: 10px;
  padding: 10px;
  border: 1px solid #f2f2f2;
  margin-top: 10px;

  .product__image {
    width: 400px;
    height: auto;
  }

  .product__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product__sizes ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .product__sizes li {
    display: inline-block;
    padding: 10px;
    border: 1px solid #090909;
    margin-right: 2px;
    transition: background 500ms;
  }

  .product__sizes li:hover {
    background: #090909;
    color: #fff;
  }
`;
