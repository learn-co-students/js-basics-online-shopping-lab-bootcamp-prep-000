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
var list = []

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
    
  } else if (cart.length === 1) {
    return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    
  } else if (cart.length > 2) {
      for (let i = 0; i < cart.length; i++ ) {
        list.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
    }
  }
    return 
      `In your cart, you have ${list} and 
      ${cart[cart.length - 1].itemName} at 
      $${cart[cart.length - 1].itemPrice}.`
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
