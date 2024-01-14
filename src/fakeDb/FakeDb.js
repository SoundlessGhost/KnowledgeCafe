const FakeDb = (id) => {
    let shoppingCart ={};
    
    // get the shopping cart 
    
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    else{
        shoppingCart ={};
    }
    
    // add Quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const NewQuantity = quantity + 1;
        shoppingCart[id]=NewQuantity;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
};

export {FakeDb};