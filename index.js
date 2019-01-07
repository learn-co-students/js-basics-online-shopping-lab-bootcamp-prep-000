var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
};

function addToCart(item){
  var price = Math.floor(Math.random() * 25);

  var itemObject = {
    [item]: price
  };
  cart.push(itemObject)
  console.log(`${item} has been added to your cart.`)
  return cart
};

function viewCart(){
  const cartSize = cart.length;
   const cartLog = [];
   if(cartSize === 0) {
     return console.log('Your shopping cart is empty.');
   };
   for(var i = 0; i < cartSize; i++) {
     let objectInCart = cart[i];
     let itemKeys = Object.keys(objectInCart);
     let item = itemKeys[0];
     let price = objectInCart[item];
     cartLog.push(`${item} at \$${price}`);
   };
    let message = `In your cart, you have ${cartLog.join(', ')}.`;
   console.log(message);
  };

function removeFromCart(item){
  const cartSize = cart.length;

  for(let i = 0; i < cartSize; i++) {
    let cartObject = cart[i];
    let itemKeys = Object.keys(cartObject);
    let cartItem = itemKeys[0];

    if(cartItem === item) {
      cart.splice(i, 1) // delete 1 object at index i
    };
  };

  if(cart.length === cartSize) {
    return console.log('That item is not in your cart.');
  };

  return cart;
};

function placeOrder(ccNumber){
  if(!ccNumber) {
    return console.log('We don\'t have a credit card on file for you to place your order.');
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccNumber}.`)

  for(let i = 0, l = cart.length; i < l; i++) {
    let objectInCart = cart[i];
    let itemKeys = Object.keys(objectInCart);
    let item = itemKeys[0];
    removeFromCart(item);
  };
};
