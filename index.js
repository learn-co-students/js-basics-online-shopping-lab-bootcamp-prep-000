var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {                                    // item is a string
  var priceRandom = Math.floor(Math.random() * 100) +1        // random price between 1 and 100
  var objectItem = {itemName: item, itemPrice: priceRandom}   // re-create items in cart as object
  var addCard = cart.push(objectItem)                         // adds item to end of cart
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {                                    // if cart has no items
    return "Your shopping cart is empty."
  }
  
  else if (cart.length === 1) {                               // if cart has one item
    return "In your cart, you have " + getCart()[0].itemName + " at $" + getCart()[0].itemPrice + "."
  } else {                                                      // if cart has two or more items
    var cartUpdate = []
    for (var i = 0; i <= getCart().length-2; i++) {           //targets every item in cart except last one
      var final = getCart()[i].itemName + " at $" + getCart()[i].itemPrice
      cartUpdate.push(final)
    }
  }
  var finalPart = getCart()[cart.length-1].itemName + " at $" + getCart()[cart.length-1].itemPrice
  return 'In your cart, you have ' + cartUpdate.join(", ") + ", and " + finalPart + "."
}

function total() {
  var sum = 0
  for (var i = 0; i < getCart().length; i++) {
    sum += getCart()[i].itemPrice
  }
  
  return sum
}

function removeFromCart(item) {
  // If item is present, remove from cart and return new cart
  // If cart doesn't contain matching item, return "That item is not in your cart."
  // cart = [{itename: watermelon, itemprice: 10}, {itename: apple, itemprice: 5}]
  
  // loop till match, then return that index
  // remove that index
  
  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1) 
      return cart
    }
  }

  return "That item is not in your cart."
  
  /*
  for(var i = 0; i < getCart().length; i++) {
    if(item === getCart()[i].itemName) {
      var remove = getCart().splice(getCart().indexOf(item),1)
      return getCart()
    }
    
    else if(getCart()[getCart().indexOf(item)] === undefined) {
      return "That item is not in your cart."
    }
  }
  */
}

function placeOrder(cardNumber) {
  // If no argument, print "Sorry, we don't have a credit card on file for you."
  // If card # received, empty cart and return "Your total cost is..."
  
  if(cardNumber === undefined) {
   return "Sorry, we don't have a credit card on file for you." 
  }
  
  var totalValue = total()
  cart = []
  return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`
}
