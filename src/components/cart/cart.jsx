/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./cart.css";
const Cart = (props) => {
  let total = 0;
  let about = "";
  for (const item of props.cart) {
    // console.log(item);
    total = total + parseInt(item.readTime);
    about = item.about;
  }

  return (
    <div className="cartContainer">
      <h4 className="cartTittle">Spent time on read:{total} min</h4>
      <div className="cartSubTittle">
        <h2 className="bookmark">Bookmarked Blogs:{props.cart.length} </h2>
        <p className="UserAbout">{about}</p>
      </div>
    </div>
  );
};

export default Cart;
