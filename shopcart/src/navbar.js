import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./signin";

function Navbar(props) {
  return (
    <Router>
      <header className="navbar-container d-flex justify-content-between align-items-center px-4 py-3">
        <Link to="/" className="navbar-logo-link">
          <h2 className="navbar-title m-0">
            Shop 2 <span className="logo-r-badge">R</span>eact
          </h2>
        </Link>

        <Link to="/cart" className="cart-indicator d-flex align-items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          <span className="cart-text">{props.totalQuantity} items</span>
        </Link>
      </header>

      <Switch>
        <Route exact path="/">
          <DisplayProducts
            products={props.products}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        </Route>
        <Route path="/cart">
          <Cart products={props.products} totalValue={props.totalQuantity} />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
