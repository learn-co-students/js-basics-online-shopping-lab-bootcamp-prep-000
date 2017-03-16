var cart = [];

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

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(100*Math.random())});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  } else {
    var yourCart = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        (i !== cart.length - 1) ? yourCart += item + " at $" + cart[i][item] + ", " : yourCart += item + " at $" + cart[i][item] + ".";
      }
    }
    console.log (yourCart);
  }
}

function removeFromCart(badItem) {
  var sizeOfCart = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(badItem)) {
      cart.splice(i,1);
    }
  }
  for (var n = 0; n < cart.length; n++)
    if (cart[n].hasOwnProperty(badItem)) {
      removeFromCart(badItem); 
    }
  if (sizeOfCart === cart.length){
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log (`We don't have a credit card on file for you to place your order.`);
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    var sizeOfCart = cart.length;
    for (var i = 0; i < sizeOfCart; i++) {
      cart.pop();
    }
  }
}
