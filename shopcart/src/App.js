import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./products";
import Navbar from "./navbar";
import "./App.css";

// Parent Class Component containing state data and quantity handlers
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
  }

  handleIncrement = (addvalue) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === addvalue.id) {
        return { ...product, value: product.value + 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  handleDecrement = (subvalue) => {
    if (subvalue.value > 0) {
      const updatedProducts = this.state.products.map((product) => {
        if (product.id === subvalue.id) {
          return { ...product, value: product.value - 1 };
        }
        return product;
      });
      this.setState({ products: updatedProducts });
    }
  };

  render() {
    // Chaining map and reduce to compute total quantity
    const totalQuantity = this.state.products
      .map((product) => product.value)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <div className="App">
        <Navbar
          products={this.state.products}
          totalQuantity={totalQuantity}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
