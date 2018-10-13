const PROXY = 'https://cors-anywhere.herokuapp.com/';

export default {
  fetchProducts: gender =>
    fetch(`${PROXY}https://www.jcrew.com/data/v1/US/enhance-category/c/${gender}_feature/newarrivals`).then(res =>
      res.json()
    ),
  fetchNavLinks: () => fetch(`${PROXY}https://www.jcrew.com/data/v1/US/navigation`).then(res => res.json()),
  fetchProduct: id => fetch(`${PROXY}https://www.jcrew.com/data/v1/US/products/${id}`).then(res => res.json()),
};
