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
  var obj = Object.assign({},{[item] : price});
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if ( cart.length > 0 ) {
    var totalItems = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        totalItems += `${item} at $${cart[i][item]}`;
        ( i === cart.length -1 ) ? totalItems += "." : totalItems += ", ";
      }
    }
    console.log(totalItems);
  } else {
    console.log("Your shopping cart is empty.");
  }
}
function removeFromCart(itemName) {
  for ( let i = 0; i < cart.length; i++) {
    var hasItem = cart[i].hasOwnProperty(itemName);
    if (hasItem) {
      cart.splice(i,1);
    }
  }
  if (!hasItem){
		console.log("That item is not in your cart.");
	}
  return cart;
}

function placeOrder(creditCard) {
  if (creditCard == undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
  return cart;
}