import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Products from './component/Products';
import { groupBy } from 'lodash';
import PropTypes from 'prop-types';

const URL = 'http://localhost:3000/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      products: [],
    };
  }

  handleAddCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(new Error(response.status + response.statusText));
      })
      .then((data) => {
        const products = Object.entries(groupBy(data, 'category')).map(
          (entry) => ({
            category: entry[0],
            products: entry[1],
          })
        );
        this.setState({ products });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <main className="app">
        <Header count={this.state.count}></Header>
        {this.state.products.map((group, index) => (
          <Products
            key={index}
            groupName={group.category}
            products={group.products}
            handleAddCart={this.handleAddCart}
          ></Products>
        ))}
      </main>
    );
  }
}

App.propTypes = {
  count: PropTypes.number,
  products: PropTypes.array,
  groupName: PropTypes.string,
  handleAddCart: PropTypes.func,
};

export default App;
