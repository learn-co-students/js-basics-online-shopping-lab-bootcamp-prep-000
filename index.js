var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var i = 0;
  var viewCartString = "";

  if(cart.length === 0) {
    viewCartString = "Your shopping cart is empty.";
  } else{
    viewCartString = "In your cart, you have ";
  }

var thisObjectKey;

  for(var item in cart) {
    thisObjectKey = Object.keys(cart[item]);
    if (i < cart.length - 1) {
      viewCartString += `${thisObjectKey[0]} at $${cart[item][thisObjectKey]}, `;
      i++;
  } else {
      viewCartString += `${thisObjectKey[0]} at $${cart[item][thisObjectKey]}.`;
  }
}
console.log(viewCartString);
}

function removeFromCart(item) {
  var thisObjectKey;
  var removedFromCart = false;
  for(var items in cart) {
    thisObjectKey = Object.keys(cart[items]);
    if(item === thisObjectKey[0]) {
      removedFromCart = true;
      cart.splice(items,1);
      return cart;
    } else {
      removedFromCart = false;
      }
    }
    if (removedFromCart === false) {
      console.log("That item is not in your cart.");
    }
  }

function placeOrder(ccNumber) {
  if(!ccNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
  }
  return cart = [];
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
