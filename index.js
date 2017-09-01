var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = Object.assign({}, {[item]: Math.floor(Math.random()*100)})
  cart.push(object);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var items = [];
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      items.push( Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])] )
    }
  }

  if (items.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (items.length === 1) {
    console.log(`In your cart, you have ${items[0]}.`)
  } else if (items.length === 2) {
     console.log(`In your cart, you have ${items[0]} and ${items[1]}.`)
  } else if (items.length > 2) {
    var temp = items.slice(0, items.length - 1).join(", ");
    console.log(`In your cart, you have ${temp}, and ${items[items.length-1]}.`)
  }
}


function total() {
  var prices = 0
  for (let i = 0; i < cart.length; i++) {
    prices += cart[i][Object.keys(cart[i])]
  }
  return prices
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
