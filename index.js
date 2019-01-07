var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var random = Math.random() * (101 - 1) + 1;
  var price = Math.floor(random);
  var object = {[item]: price};
  cart.push(object);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var string = 'In your cart, you have ';
  var l = cart.length;
  if (l > 0) {
  for (var i = 0; i < l; i++) {
    for (var item in cart[i]) {
      var price = cart[i][item];
      if (i !== l - 1) {
      string = `${string}${item} at $${price}, `;
    } else {
    	string = `${string}${item} at $${price}.`
    }
    }
  }
   console.log(string);
  }
    else {
    console.log('Your shopping cart is empty.')
  }
}
function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
  	if (cart[i].hasOwnProperty(name)) {
      	cart.splice(i, 1);
        return cart;
  	}
      }
        console.log("That item is not in your cart.");
    }

    function placeOrder(cardN) {
      if (cardN === undefined) {
        console.log (`We don\'t have a credit card on file for you to place your order.`);
      } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardN}.`);
      }
      cart =[];
    }
