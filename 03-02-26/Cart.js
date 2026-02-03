import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Red Shirt", price: 20, color: "red", quantity: 1 },
    { id: 2, name: "Blue Jeans", price: 40, color: "blue", quantity: 0 },
    { id: 3, name: "Green Hat", price: 15, color: "green", quantity: 2 },
    { id: 4, name: "Yellow Shoes", price: 60, color: "goldenrod", quantity: 1 },
    { id: 5, name: "Black Jacket", price: 80, color: "black", quantity: 0 }
  ]);

  // Increment quantity
  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Decrement quantity
  const decrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Reset quantity
  const reset = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: 0 }
        : item
    ));
  };

  // Total Price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Shopping Cart</h1>

      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
      ))}

      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}

export default Cart;