import React from "react";

function Cart(props) {
  const cartItems = props.products.filter((product) => product.value > 0);

  return (
    <main className="container my-4 cart-container">
      <h4 className="mb-4">Your Cart Items</h4>
      {cartItems.length === 0 ? (
        <p className="text-muted">There are 0 items in your cart.</p>
      ) : (
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
      )}
    </main>
  );
}

export default Cart;
