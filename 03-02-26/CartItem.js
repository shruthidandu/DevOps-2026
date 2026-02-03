import React from "react";

function CartItem({ item, increment, decrement, reset }) {
  return (
    <div
      style={{
        border: `2px solid ${item.color}`,
        padding: "15px",
        width: "280px",
        margin: "15px auto",
        borderRadius: "8px"
      }}
    >
      <h3 style={{ color: item.color }}>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => increment(item.id)}>+</button>

      <button
        onClick={() => decrement(item.id)}
        disabled={item.quantity === 0}
        style={{ margin: "0 10px" }}
      >
        -
      </button>

      <button onClick={() => reset(item.id)}>Reset</button>
    </div>
  );
}

export default CartItem;