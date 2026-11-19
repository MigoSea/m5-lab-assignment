import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <main className="container my-4 cart-container">
      <h4 className="mb-4">Your Cart Items</h4>
      {props.totalValue > 0 ? (
        <React.Fragment>
          <div className="cart-list border">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex align-items-center p-3 border-bottom"
              >
                <div className="cart-item-left text-center mr-5">
                  <img
                    src={item.image}
                    alt={item.desc}
                    className="cart-item-image mb-2"
                  />
                  <div className="cart-item-title">{item.desc}</div>
                </div>
                <div className="cart-item-qty font-weight-bold">
                  Quantity: {item.value}
                </div>
              </div>
            ))}
          </div>
          <Link to="/signin">
            <button type="button" className="btn btn-primary mt-3">
              Check Out
            </button>
          </Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="mb-3">There are {props.totalValue} items in your cart.</p>
          <Link to="/">
            <button type="button" className="btn btn-success">
              Continue Shop
            </button>
          </Link>
        </React.Fragment>
      )}
    </main>
  );
}

export default Cart;
