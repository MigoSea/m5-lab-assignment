# m5-lab-assignment: Shop to React Shopping Cart App

A basic shopping cart application built in React for Westcliff University WEB 403/603 - Week 1 Day 3 Lab Assignment.

## Features:
- **Parent Class Component (`App`):** Centralizes the application state, managing the `products` list and quantity changes.
- **Child Functional Components in `App.js`:**
  - `Navbar`: Displays the site name ("Shop to React") and total items count with a shopping cart icon (`@fortawesome/free-solid-svg-icons`).
  - `DisplayProducts`: Renders product cards (Image, Title, Quantity input).
- **Map and Reduce:** Calculates total quantity across all products dynamically using chained `.map()` and `.reduce()` methods.
- **Styling:** Styled with Bootstrap and custom CSS to match the design specifications.
