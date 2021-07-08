var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {[item]: (Math.floor(Math.random() * Math.floor(100)))}
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var sentence = "In your cart, you have "
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])
    var price = cart[i][item];
    newCart.push(`${item} at $${price}`);
  }
  
  if (newCart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  } else if (newCart.length === 1) {
    console.log(sentence + `${newCart[0]}.`)
  } else if (newCart.length === 2) {
    console.log(sentence + `${newCart[0]} and ${newCart[1]}.`)
  } else if (newCart.length > 2) {
    for (var x = 0; x < (newCart.length - 1); x++) {
      sentence +=`${newCart[x]}, `
    }
    var last = newCart.length - 1;
    console.log(sentence +  `and ${newCart[last]}.`)
  }
}


function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])
    var price = cart[i][item];
    cartTotal += price;
  }
  return cartTotal;
}

function removeFromCart(item) {
  var removed = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      removed = cart.splice(i,1);
    } 
  }
  if (removed.length === 0) {
      console.log (`That item is not in your cart.`);
    } else {
      return cart;
    }
}


function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber) {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
