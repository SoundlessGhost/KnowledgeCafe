/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./cart.css";
const Cart = ({ cart, removeCart }) => {
  let total = 0;
  for (const item of cart) {
    total = total + parseInt(item.readTime);
  }

  return (
    <div className="cartContainer">
      <h4 className="cartTittle">Spent time on read:{total} min</h4>
      <div className="cartSubTittle">
        <h2 className="bookmark">Bookmarked Blogs:{cart.length} </h2>
        {cart.map((ua) => (
          <p className="UserAbout" key={ua.id}>
            {ua.about} <span onClick={() => removeCart(ua.id)}>X</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
