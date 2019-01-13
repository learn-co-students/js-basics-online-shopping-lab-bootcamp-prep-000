var cart = [];

function getCart(){
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var object = {
    itemName: item, 
    itemPrice: price
  }
  cart.push(object)
  return `${object.itemName} has been added to your cart.`;
}

function viewCart() {
  list = []

  if (cart.length == 1) {
    return`In your cart, you have ${cart.itemName} at ${cart.itemPrice}.`
  }
  
  if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice} and ${cart[1].itemName} at ${cart[1].itemPrice}.`
    
  if (cart.length > 2) {
    var i = 0; i < cart.length; i++ 
    while (i < cart.length - 1) {
      list.push(`${cart.itemName} at ${cart.itemPrice}`)
    }
    return `In your cart, you have ${list}
  }
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
