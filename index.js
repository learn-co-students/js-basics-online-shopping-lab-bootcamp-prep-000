var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice() {
  return Math.floor(Math.random() * 100) + 1;
}

function addToCart(item) {
  var cartobj = {[item]: getPrice()};
  cart.push(cartobj);
  console.log(item + " has been added to your cart.");
  return cart;// write your code here
}

function viewCart() {
  var message = "";
  var currItem = "";
  var currItemNum = 0;
  if (cart.length > 0) {
    message  = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      currItem = Object.keys(cart[i]);
      message += ` ${currItem} at $${ (cart[i])[currItem] }`
      currItemNum = cart.length - i;
      if (currItemNum > 1) {
        if (cart.length > 2) {
          message += ",";
        }
        if (currItemNum === 2) {
          message += " and";
        }
      }
      else {
        message += ".";
      }
    }
  }
  else {
    message = "Your shopping cart is empty.";
  }
  console.log(message);
}

function total() {
  var currItem = "";
  var totprice = 0;
  for (var i = 0; i < cart.length; i++) {
    currItem = Object.keys(cart[i]);
    totprice += (cart[i])[currItem];
  }
  return totprice;
}

function removeFromCart(item) {
  var itemfound = false;
  var newcart = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      // delete (cart[i])[item]
      itemfound = true;
    }
    else {
      newcart.push(cart[i]);
    }
  }
  if (itemfound === false) {
    console.log("That item is not in your cart.")
  }
  else {
   cart = newcart;
   return cart;
  }
}

function placeOrder(cardNumber) {
  var message = "";
  if (cardNumber != undefined ) {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  else {
    message = `Sorry, we don't have a credit card on file for you.`
  }
  cart = [];
  console.log(message);
}
