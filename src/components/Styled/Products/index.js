import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 10px;
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
