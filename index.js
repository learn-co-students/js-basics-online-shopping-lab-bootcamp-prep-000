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

function addToCart(thing) {
  var itemPrice = Math.floor(Math.random()*100);
  var item = {};
  item[thing] = itemPrice;
  cart.push(item);
  console.log(`${thing} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var phrase = "In your cart, you have";
  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i != cart.length-1) {
        for (var item in cart[i]) {
          phrase = phrase + ` ${[item]} at $${cart[i][item]},`
        }
      } else {
        for (var item in cart[i]) {
          phrase = phrase + ` ${[item]} at $${cart[i][item]}.`
        }
      }
    }
  }
  console.log(phrase);
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber){
  if (creditCardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  }
}
