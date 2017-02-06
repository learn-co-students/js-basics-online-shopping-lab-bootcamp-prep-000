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

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push( {[item]: price} );
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var message = "";
  var l = cart.length;
  if (l === 0) {
     message += "Your shopping cart is empty.";
  }
  else {
    message += "In your cart, you have ";
    for (var i = 0; i < l; i++) {
      for (var item in cart[i]) {
        message += `${item} at \$${cart[i][item]}, `;
      }
    }
    message = message.slice(0, -2);
    message += ".";
  }
  console.log(message);
}



function removeFromCart(removedItem) {
	var inCart = false;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(removedItem)) {
        cart.splice(i, 1);
        inCart = true;
        return cart;
  		}
    }
  }
  if (inCart === false) {
  	console.log("That item is not in your cart.");
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
