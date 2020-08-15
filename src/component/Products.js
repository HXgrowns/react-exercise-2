import React, { Component } from 'react';
import Product from './Product.js';
import '../styles/Products.scss';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { groupName, handleAddCart, products } = this.props;
    return (
      <section className="products-list">
        <h3 className="products-category">{groupName}</h3>
        <section className="products">
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              handleAddCart={handleAddCart}
            ></Product>
          ))}
        </section>
      </section>
    );
  }
}

Products.propTypes = {
  handleAddCart: PropTypes.func,
  groupName: PropTypes.string,
  products: PropTypes.array,
};

export default Products;
