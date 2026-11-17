import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

// Parent Class Component containing states data
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Unisex Cologne",
          image: "./products/cologne.jpg",
          value: 0
        },
        {
          id: 2,
          title: "Apple iWatch",
          image: "./products/iwatch.jpg",
          value: 0
        },
        {
          id: 3,
          title: "Unique Mug",
          image: "./products/mug.jpg",
          value: 0
        },
        {
          id: 4,
          title: "Mens Wallet",
          image: "./products/wallet.jpg",
          value: 0
        }
      ]
    };
  }

  handleQuantityChange = (id, newQty) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        return { ...product, value: Math.max(0, newQty) };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  render() {
    // Chaining map and reduce to compute total quantity
    const totalQuantity = this.state.products
      .map((product) => product.value)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <div className="App">
        {/* Child Functional Component 1: Navbar */}
        <Navbar totalQuantity={totalQuantity} />

        {/* Child Functional Component 2: Product List */}
        <DisplayProducts
          products={this.state.products}
          onQuantityChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

// Child Functional Component 1: Navbar
function Navbar(props) {
  return (
    <header className="navbar-container d-flex justify-content-between align-items-center px-4 py-3">
      <h2 className="navbar-title m-0">Shop to React</h2>
      <div className="cart-indicator d-flex align-items-center">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        <span className="cart-text">{props.totalQuantity} items</span>
      </div>
    </header>
  );
}

// Child Functional Component 2: Display Products
function DisplayProducts(props) {
  return (
    <main className="container my-4">
      {props.products.map((product) => (
        <section key={product.id} className="product-item py-4 border-bottom">
          <h5 className="product-title font-weight-bold mb-3">{product.title}</h5>
          <div className="d-flex align-items-center">
            <div className="product-image-container mr-5">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="quantity-container d-flex align-items-center">
              <input
                type="number"
                min="0"
                value={product.value}
                onChange={(e) =>
                  props.onQuantityChange(
                    product.id,
                    parseInt(e.target.value) || 0
                  )
                }
                className="quantity-input form-control text-center mr-2"
              />
              <span className="quantity-label text-muted">quantity</span>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default App;
