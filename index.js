var cart;

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

// MY STUFF
var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var newArray = []
  if(cart.length > 0) {
    for(var i = 0; i < cart.length; i++) {
      var itemAndPriceObject = cart[i];
      var item = Object.keys(itemAndPriceObject)[0];
      var price = itemAndPriceObject[item];
      newArray.push(` ${item} at $${price}`)
    }
    console.log(`In your cart, you have${newArray}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}
function removeFromCart(name) {
  var itemExists = false;
  for(var i = 0; i < cart.length; i++) {
    var itemsAndPriceObjects = cart[i];
    var items = Object.keys(itemsAndPriceObjects)[0];
    if (items === name) {
      itemExists = true;
      cart.splice(i,1)
    }
  }
  if(!itemExists) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(creditCardNumber) {
  if(!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  }
  var emptyCart = [];
  cart = emptyCart;
}
