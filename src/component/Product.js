import React, { Component } from 'react';
import productImg from '../assets/product_image_placeholder.png';
import '../styles/Product.scss';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { name, price, handleAddCart } = this.props;
    return (
      <section>
        <h5 className="phone-name">{name}</h5>
        <img className="product-img" src={productImg}></img>
        <section className="product-info">
          <p>{price}</p>
          <button className="product-add" onClick={handleAddCart}>
            add to cart
          </button>
        </section>
      </section>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  handleAddCart: PropTypes.func,
};

export default Product;
