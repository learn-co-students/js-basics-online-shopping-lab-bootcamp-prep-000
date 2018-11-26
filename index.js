// model and operate on a shopping cart full of items as an array of objects

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // adds new item to cart 
  var randomInt = Math.floor(Math.random() * Math.floor(100))
  cart.push({
    itemName: item, 
    itemPrice: randomInt
  }) 
  return `${item} has been added to your cart.`
}

function viewCart() {
  // returns contents of current cart in a single string
  var array = []
  var i = 0 
  if (cart.length === 0) {
    return "Your shopping cart is empty."
    
    //for one item:
  } else if (cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
      
    // for two or more items, build an array of all but last item:
  } else {
    while (i < cart.length - 1) {
      array[i] = ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      i++
    }
    
    // create custom string for last item
    var lastItem = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`
    
    // return all-but-last array with last item
    return "In your cart, you have" + array.toString() + lastItem
  }
}

function total() {
  // return total price of all items in cart
  var total = 0 
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // return updated cart if an item was removed
  
  // track number of items remaining in cart
  var cartCounter = 0 
  
  // remove item from cart
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
    } else {
      cartCounter++
    }
  }
  
  // alert if number of items in cart hasn't changed
  if (cartCounter === cart.length) {
    return "That item is not in your cart."
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  //return string with total and cardNumber, or alert of no card
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }
}

