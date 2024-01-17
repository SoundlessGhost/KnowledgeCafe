/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../cart/cart";
import ShowItem from "../showItem/Showitem";
// import { toast } from "react-hot-toast";
const Home = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("package.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const [cart, setCart] = useState([]);
  const clickHandler = (item) => {
    const exist = cart.find((i) => i.id === item.id);
    if (exist) {
      alert("You Have Already Added");
      return;
    }
    setCart([...cart, item]);
  };

  const removeCart = (id) => {
    const remaining = cart.filter((cart) => cart.id !== id);
    setCart(remaining)
  };

  return (
    <div className="mainContainer">
      <div className="newsContainer">
        {items.map((item) => (
          <ShowItem
            clickHandler={clickHandler}
            item={item}
            key={item.id}
          ></ShowItem>
        ))}
      </div>
      <div className="cardContainer">
        <Cart cart={cart} removeCart={removeCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
