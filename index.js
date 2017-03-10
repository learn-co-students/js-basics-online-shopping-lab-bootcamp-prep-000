var cart = []

function getCart () {
  return cart;
}


function setCart(newCart) {
  cart = newCart;
}


function addToCart (itemToPurchase) {
  //set price for item between 0 and 100
  var prices = Math.floor(Math.random() * 100);
  //add item and prices as object to cart
  cart.push({[itemToPurchase]: prices})
  //print to console
  console.log(`${itemToPurchase} has been added to your cart.`)
//return cart
return cart;
}


function viewCart () {
  //check items in cart
  const l = cart.length
  //check if no items
  if(!l) {
    //string for no items
    return console.log("Your shopping cart is empty.")
  }
  //description of items in cart
  const itemDescription = []
  //loop over every item in cart
  for(var i = 0; i < l; i++) {
    var itemDescriptions = cart[i]
    var item = Object.keys(itemDescriptions)[0]
    var price = itemDescriptions[item]
    //combine item and price
    itemDescription.push(`${item} at \$${price}`)
  }
    //string for items in cart
    console.log(`In your cart, you have ${itemDescription.join(', ')}.`)
};


function removeFromCart (itemToRemove) {
  //check if item is in cart
  let itemInCart = false
  //remove if found
  for(var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(itemToRemove)) {
      itemInCart = true
      cart = cart.slice(0, i). concat(cart.slice(i + 1))
    }
  }
  //item not in cart
  if(!itemInCart) {
  console.log("That item is not in your cart.")
}
return cart;
}


function placeOrder (cardNumber) {
  //no argument received
  if(!cardNumber) {
  return console.log("We don't have a credit card on file for you to place your order.")
}
//should empty cart array
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
cart = []
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
