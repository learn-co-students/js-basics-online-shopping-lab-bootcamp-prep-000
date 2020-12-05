var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  let groceryList = {
  [item]: itemPrice
}

cart.push(groceryList);

console.log(`${item} has been added to your cart.`);
return cart;
}


function viewCart() {
  if(cart.length < 1){
     console.log('Your shopping cart is empty.');
  }
  
 let generateCart = [];
  
    for (let i=0; i < cart.length; i++){
      
     let currentItemObject = cart[i];
     let currentItemkey = Object.keys(cart[i])[0]
     let currentItemValue = currentItemObject.currentItemkey
    generateCart.push(`In your cart, you have ${currentItemkey} at $${currentItemValue}.`)
  }
  
    if(cart.length === 1){
      console.log(generateCart[0]);
  }
    // console.log(generateCart[0]);
}
  

function total() {
  let t = 0;

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
