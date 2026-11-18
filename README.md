# Module 5 Lab Assignment - Shop 2 React (Shopping Cart App)

## Commit #2 - Week 2 Day 3 Lab Assignment
This repository contains the updated React Shopping Cart application (`shopcart`) for **WEB 403/603 Full Stack Web Development** at Westcliff University.

### Updates Completed in Commit #2
1. **Modular Component Separation:**
   - `src/products.js` — Product catalog state data with `ratings` property.
   - `src/navbar.js` — Navigation bar (`Shop 2 React` logo + live cart count) with `react-router-dom` routing (`/` and `/cart`).
   - `src/displayProducts.js` — Product list view with interactive `+` / `-` FontAwesome quantity buttons and React-Bootstrap Modal lightbox.
   - `src/cart.js` — Cart page displaying only items with quantity `>= 1`.
2. **Product Lightbox Modal:**
   - Clicking any product image opens a React-Bootstrap `<Modal>` displaying product description, enlarged image, and ratings (`x/5`) with a close (`X`) button.
3. **Quantity Add/Subtract Handlers:**
   - Implemented `handleIncrement` and `handleDecrement` in `App.js` using `setState()`, dynamically updating each product and the total item count in the navbar.
4. **Client-Side Routing:**
   - Clicking the shopping cart icon navigates to `/cart`; clicking the `Shop 2 React` logo navigates back to `/`.

## How to Run Locally
```bash
cd shopcart
npm install
npm start
```
