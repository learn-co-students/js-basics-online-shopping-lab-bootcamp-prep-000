var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObject = {itemName: item, itemPrice: price};
  itemObject[item] = price;
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  return getCart().length === 0? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
 var sum = 0
 for (var i = 0; i<getCart().length; i++) {
   sum = sum + getCart()[i].itemPrice
 }
 return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCart(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : nothingToRemove()// write your code here
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

// These functions below help the code above be shorter and easier to read.
// Note that to interpolate in JS, you need to use backticks: ` v. '

// First, we create a function to get a random number for the price.
// Math.floor will round the number down to the nearest/largest integer,
// and math.random will give us a number from 0 to 1, inclusive of 0.

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Next, we create a function that will give us a cart item that we can
// add to our cart. This means we need a price and an item name.

function generateItem(item) {
  return {
    itemName: item,
    itemPrice: getRandomNumber
  }
}

// Next, we will generate the cart description. This puts your cart
// together in parts. If you have 1 item, if you have 2+ items, etc.

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if (getCart().length >=1) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2) {
    var otherStuff = ''
    for (var i=1; i<getCart().length -1; i++) {
      otherStuff += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${otherStuff}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartDescription}.`
}

// Now we need two functions: one to see if an item is in the cart and another
// to tell the user there is nothing to take out of the cart.

function searchCart(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function nothingToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}
