var cart = [];

function randomPrice() {
  var max = 100;
  var min = 1;
  const t = Math.floor( Math.random() * (max-min) + min );
  return t;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]:randomPrice()})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
	console.log(`Your shopping cart is empty.`)
  }
  else {
	 var text = "In your cart, you have";
	 for (let i=0; i<cart.length; i++) {
		 text += ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`

		 if (i === cart.length - 2 && cart.length > 2) {
		 	text += `, and`
		 }
     else if (i === cart.length - 2 && cart.length == 2) {
      text += ` and`
     }
		 else if (i === cart.length - 1) {
		 	text += `.`
		 }
		 else {
		 	text += `,`
		 }
	 }
  }
  console.log(text);
}

function total() {
  var totalA = cart.reduce(function(s,e) {
	//console.log(e[Object.keys(e)[0]]);
	return s + e[Object.keys(e)[0]]
  },0)
  return totalA;
}

function removeFromCart(item) {
  var startLen = cart.length;
  cart = cart.filter(e => {
	return (e.hasOwnProperty(item) == false);
  })
  if (startLen == cart.length) {
	   console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
	console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
	cart = [];
  }
}
