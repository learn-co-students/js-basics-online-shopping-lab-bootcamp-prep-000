var cart = [];

function getCart(itemName) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]:itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var currentCart = [];
      for (var i = 0; i < cart.length; i++) {
        var currentObject = cart[i];
	       var key = Object.keys(currentObject)[0];
	        var price = currentObject[key];
          currentCart.push(`${key} at $${price}`);
        }
        if (currentCart.length === 1) {
          console.log(`In your cart, you have ${currentCart}.`);
        } else if (currentCart.length === 2) {
            console.log(`In your cart, you have ${currentCart.join(' and ')}.`);
        } else if (currentCart.length >= 3) {
          var sliced = currentCart.slice(0, currentCart.length -1);
          console.log(`In your cart, you have ${sliced.join(', ')}, and ${currentCart.slice(-1)[0]}.`);
        }

    }
}
function total() {
  // write your code here
  var sum = 0;
  for (var i in cart) {
  	for (var j in cart[i]){
    	sum += cart[i][j];
    }
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
			cart.splice(i, 1);
			return cart;
		}
	}
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total()

  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
