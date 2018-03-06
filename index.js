var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = parseInt(Math.random()*100);
  var newObject = {[item]: itemPrice};
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if(!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var placeholder = [];
    for(var i = 0; i < cart.length; i++) {
      var temp = cart[i];
      placeholder[i] = `${Object.keys(cart[i])} at \$${temp[Object.keys(cart[i])]}`;
    }
    if(cart.length === 1) {
      console.log(`In your cart, you have ${placeholder}.`);
    } else if(cart.length === 2) {
      placeholder = placeholder.join(' and ');
      console.log(`In your cart, you have ${placeholder}.`);
    } else {
      placeholder[placeholder.length - 1] = `and ${placeholder[placeholder.length-1]}`;
      placeholder = placeholder.join(', ');
      console.log(`In your cart, you have ${placeholder}.`);
    }
  }
}

function total() {
  var sumTotal = 0;
  if(!cart.length) {
    console.log("Your cart is empty.");
  } else {
    for(var i = 0; i < cart.length; i++) {
      var temp = cart[i];
      var itemPrice = temp[Object.keys(cart[i])];
      sumTotal += itemPrice;
    }
  }
  return sumTotal;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalPrice = total();
    console.log(`Your total cost is \$${totalPrice}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0,cart.length);
    console.log(cart);
  }
}

addToCart("apples");
addToCart("bannanas");
addToCart("peaches");
// viewCart();
// total();
removeFromCart("apples");
placeOrder("4147256841262597");
