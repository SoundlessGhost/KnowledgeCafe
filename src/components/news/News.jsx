/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './News.css'
import Showitem from '../showItem/Showitem';
import Cart from '../cart/cart';
const News = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch('../../../public/package.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const [cart, setCart] = useState([])
    const clickHandler = (item) => {
        setCart([...cart, item])
    }

    return (
        <div className='mainContainer'>
            <div className='newsContainer'>
                {
                    items.map(item => <Showitem clickHandler={clickHandler} item={item} key={item.id}></Showitem>)
                }
            </div>
            <div className='cardContainer'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default News;