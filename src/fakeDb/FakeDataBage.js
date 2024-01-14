const addToDB = (id) => {
    // GET THE STORED CART FROM LOCAL STORAGE
    let shoppingCart = {};

    const getStoredCard = localStorage.getItem('shoppingCart');
    if(getStoredCard){
        shoppingCart= JSON.parse(getStoredCard);
    }
    else{
        shoppingCart;
    }

    // ADD QUANTITY 
    const quantity = shoppingCart[id];
    if(quantity){
        const NewQuantity = quantity+1;
        shoppingCart[id]= NewQuantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
};

// remove shopping cart from data bage 
const removeFromDB =(id)=>{
    const getStoredCard =localStorage.getItem('shoppingCart');
    if(getStoredCard){
        const shoppingCart =JSON.parse(getStoredCard);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
        }
    }
}

// get shopping cart from local storage
const getShoppingCart =()=>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart)
    }
    else{
        shoppingCart;
    }
}

// deleteShoppingCart
const deleteShoppingCart=()=>{
    localStorage.removeItem("shoppingCart")
}
export {
    addToDB,
    removeFromDB,
    getShoppingCart,
    deleteShoppingCart
}