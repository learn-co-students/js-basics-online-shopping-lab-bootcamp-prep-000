var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function constructItemObj(itemName) {
  return {
    itemName: itemName,
    itemPrice: getRandomInt(1, 100)
  }
}

function addToCart(item) {
  item = constructItemObj(item);
  
  cart.push(item);
  
  return `${item.itemName} has been added to your cart.`
}

// I CAN DO BETTER... //
function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } 
  
  else if (cart.length == 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } 
  
  else if (cart.length == 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  } 
  
  else if (cart.length >= 3) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  }
}

function total() {
  var cartTotal = 0 
  for (let i = 0; i < getCart().length; i++) {
    cartTotal = cartTotal + getCart()[i].itemPrice
  } return cartTotal
}

function removeFromCart(itemToRemove) {
  for (let i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === itemToRemove) {
      return getCart().splice(i, 1);
    }
  }
  return `That item is not in your cart.`
}
 
function placeOrder(cardNumber) {
  if (!cardNumber) {
    
    return `Sorry, we don't have a credit card on file for you.`
    
  } else {
    var totalCost = total();
    var creditCardNumber = cardNumber
    
    setCart([]); // *empty the cart*
    
    return `Your total cost is $${totalCost}, which will be charged to the card ${creditCardNumber}.`
  }
}

