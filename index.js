var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var itemPrice = ( Math.floor(Math.random() * 100) );
  var itemToAdd = new Object( {[item]: itemPrice} );
  cart.push(itemToAdd);
  console.log(item + " has been added to your cart.");
  return cart;
}

// function viewCart() {
//   var itemAtPrice = [];
//   if (cart.length > 0) {
//     for (var i in cart) {
//       itemAtPrice.push(` ${cart[i].name} at $${cart[i].price}`);
//     }
//   console.log(`In your cart, you have${itemAtPrice}.`);
//   }
//   else {
//     console.log("Your shopping cart is empty.");
//   }
// }

function viewCart() {
  if (cart.length > 0) {
  var str = "In your cart, you have ";

  for (var i = 0, l = cart.length; i < l; i++) {
    var keys = Object.keys(cart[i]);
    str += keys + " at $";
    for (var item in cart[i]) {
        if(i === cart.length -1) {
          str +=  cart[i][item] + ".";
        }
        else {
          str += cart[i][item] + ", ";
      }
    }
  }
  console.log(str);
}
else {
  console.log("Your shopping cart is empty.");
}
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
    for (var x in cart[i]) {
      var key = Object.keys(cart[i]);
      if (key[0] === itemName) {
        delete cart[i];
        cart = [];
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

// function placeOrder(cardNumber) {
//   if (cardNumber === undefined) {
//     console.log("We don't have a credit card on file to place your order.");
//   }
//   else {
//     console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
//     while(cart.length > 0) {
//       cart.pop();
//     }
//   }
// }

function placeOrder(cardNumber) {
  if (typeof cardNumber === "number") {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    while (cart.length > 0) {
      cart.pop();
    }
  }
  else {
    console.log("We don\'t have a credit card on file for you to place your order.");
  }
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}
