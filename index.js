var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomInt() {
  return Math.floor(Math.random() * 100) + 1
}

function addToCart(item) {
  var newObj = Object.assign({}, { [item]: randomInt() })
  cart.push(newObj)
  console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var message = ['In your cart'];
  for (var i = 0; i < cart.length; i++) {
  	var term = (Object.keys(cart[i])[0]);
    if (i === 0) {
        message.push(` you have ${Object.keys(cart[i])} at $${cart[i][term]}`)
        console.log(`${message.toString()}.`);
    } else if (i === 1 && cart.length === 2) {
    		message[0] = 'In your cart,';
    		message.push(` and ${Object.keys(cart[i])} at $${cart[i][term]}`)
        console.log(`${message.join('')}.`);
    } else if (i < cart.length - 1) {
        message.push(` ${Object.keys(cart[i])} at $${cart[i][term]}`)
        console.log(`${message.toString()}.`);
    } else {
    		message.push(` and ${Object.keys(cart[i])} at $${cart[i][term]}`)
        console.log(`${message.toString()}.`);
    }
  }
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
}

function total() {
 	var totalPrice = 0;
	for (var i = 0; i < cart.length; i++) {
  	var itemPrice = (Object.keys(cart[i])[0]);
    totalPrice += cart[i][itemPrice]
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    var object = cart[i];
    var key = Object.keys(object)[0];
    if (object.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length);
  }
  return cart;
}
