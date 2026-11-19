# Module 5 Lab Assignment - Shop 2 React (Shopping Cart App)

## Commit #3 - Week 3 Day 3 Lab Assignment (Part 1)
This repository contains the updated React Shopping Cart application (`shopcart`) for **WEB 403/603 Full Stack Web Development** at Westcliff University.

### Updates Completed in Commit #3
1. **Conditional Cart Screen (`src/cart.js`):**
   - Uses a ternary operator with `React.Fragment` based on dynamic `totalValue`.
   - Displays a **Check Out** button below cart items when the cart is **not empty** (`totalValue > 0`).
   - Displays `"There are 0 items in your cart."` (dynamic `totalValue`) and a **Continue Shop** button returning to `/` when the cart is **empty** (`totalValue === 0`), hiding the Check Out button.
2. **Sign In & Facebook OAuth Login (`src/signin.js`):**
   - Clicking **Check Out** navigates to `/signin` showing the **Sign In** card with standard login form and `react-facebook-login` button.
3. **Authenticated Check Out Screen (`src/signin.js`):**
   - Upon successful Facebook OAuth authorization, transitions the title to **Check Out**, displays user avatar, `"Welcome Back {name}!"`, and `"Time to check out?"`.
4. **Routing (`src/navbar.js`):**
   - Added `/signin` route and passed `totalValue` prop to `<Cart />`.

### Previous Commits
- **Commit #2 (Week 2 Day 3):** Modular components (`products.js`, `navbar.js`, `displayProducts.js`, `cart.js`), React-Bootstrap Modal lightbox with product ratings, `+`/`-` quantity buttons, and cart router.
- **Commit #1 (Week 1 Day 3):** Initial Shop 2 React app with product catalog and `.map().reduce()` total quantity calculation.

## How to Run Locally
```bash
cd shopcart
npm install
npm start
```
