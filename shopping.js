const loadLocalstorageCart = () =>{
    const cart = getCart()
    for(const name in cart){
        displayItem(name)
    }
}

const addItem = () =>{
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    if(!name){
        return;
    }
    // display product to the UI
    displayItem(name)
    // product store in the localStorage
    addCartToProduct(name)

    nameField.value = '';
}

const displayItem = name =>{
    const ulContainer = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name;
    ulContainer.appendChild(li)
}

const getCart = () =>{
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addCartToProduct = name =>{
    const cart = getCart()
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringifyed = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringifyed)
}

const orderPlace = () =>{
    document.getElementById('products').textContent = ''
    localStorage.removeItem('cart');
}

loadLocalstorageCart();

