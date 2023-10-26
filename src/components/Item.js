import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  function setItemInCart() {
    setInCart(!isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={setItemInCart}>
        {isInCart ? "Remove from cart" : "Add to cart"} 
      </button>
    </li>
  );
}

export default Item;
