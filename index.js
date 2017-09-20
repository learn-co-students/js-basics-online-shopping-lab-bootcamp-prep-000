var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 99) + 1);
  var obj = {[item]: itemPrice};
  cart.push(obj);
    console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const length = cart.length;
  if(length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var msg = "In your cart, you have ";
    for(var i = 0; i < length; i++) {
      for(var list in cart[i]) {
        msg = msg + `${list} at $${cart[i][list]}`;
        if(cart.length === 2) {
          if(i !== cart.length - 1) {
            msg = msg + " and ";
          } else {
            msg = msg + ".";
          }
        } else if(cart.length !== 2) {
          if (i !== cart.length - 2 && i !== cart.length - 1) {
            msg = msg + ", ";
          } else if(i === cart.length - 2 ) {
            msg = msg + ", and ";
          } else {
            msg = msg + ".";
          }
        }
      }
    }
    console.log(msg);
  }
}

function total() {
  var subTotal = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var list in cart[i]) {
      subTotal += cart[i][list];
    }
  }
  return subTotal;
}

function removeFromCart(item) {
  var itemBool = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
    cart = cart.slice(0, i).concat(cart.slice(i + 1));
    itemBool = true;
    }
  }
  if(!itemBool) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined || typeof cardNumber !== "number") {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
