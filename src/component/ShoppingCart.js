import React, { Component } from 'react';
import shopping from '../assets/shopping-cart.png';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { count } = this.props;
    return (
      <section>
        <img className="header-img" src={shopping} alt="shopping cart"></img>
        <p className="goods-count">{count}</p>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  count: PropTypes.number,
};

export default ShoppingCart;
