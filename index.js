var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
  var item = {itemName: name, itemPrice: Math.floor(Math.random() * 101)}
  cart.push(item)
}

function viewCart() {
  return getCart().length === 0 ? `Your shopping cart is empty.` : helperMethod()
}

function helperMethod() {
  var beginningMessage =  `In your cart, you have`
  if (getCart().length >= 1) {
    beginningMessage += ` ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2) {
    var messageTwo = ``
    for (var counter = 1; counter < getCart().length -1; counter++) {
      messageTwo+= `, ${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}`
    }
    beginningMessage += `${messageTwo}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${beginningMessage}.`
}



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
