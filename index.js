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
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var text = '';
  if (cart.length === 0) {
    console.log( "Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        if(i === 0) {
        text += `In your cart, you have ${item} at $${cart[i][item]}`;
      } else if (i !== cart.length - 1){
        text += `, ${item} at $${cart[i][item]}`;
      } else {
        text += `, ${item} at $${cart[i][item]}.`;
      }
      }
    }
    console.log(text);
  }

}

function removeFromCart(item) {
  var temp = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      temp = true;

    for (var x in cart[i]) {
      if (x === item) {
        cart.splice(i, i + 1);
      }
    }
  }
}
if (temp === false) {
  console.log("That item is not in your cart.");
}
  return cart;
}

function placeOrder(number) {
  var totals = 0;
  if (!number) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    totals += total();
    console.log(`Your total cost is $${totals}, which will be charged to the card ${number}.`);

  }
      cart = [];
  return cart;
}
