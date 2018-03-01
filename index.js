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
 var objPair = {}
 objPair[item] = Math.floor(Math.random() * 100)
 cart.push(objPair)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() { 
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var itemAtPrice = []
    for (let i = 0; i < cart.length; i++) {
     itemAtPrice.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    }
    if (cart.length === 1) {
      return `In your cart, you have${itemAtPrice}.`
    } else if (cart.length === 2) {
      return `In your cart, you have${itemAtPrice[0]} and${itemAtPrice[1]}.`
    } else {
      return `In your cart, you have${itemAtPrice.slice(0, itemAtPrice.length - 1)}, and${itemAtPrice.slice(-1)}.`
    }
  }
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
