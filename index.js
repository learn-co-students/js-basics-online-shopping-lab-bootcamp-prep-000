var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var turnobj = {itemName: item, itemPrice: price}
  cart.push(turnobj)
  return `${item} has been added to your cart.`
  
}

function viewCart() {
  var i = cart.length
  var stdtext = 'In your cart, you have '
  if(i === 1){
    return  stdtext + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if(i === 0){
    return 'Your shopping cart is empty.'
  }
  if( i > 1){
    for(let j = 0; j < cart.length - 1; j++) {
      stdtext +=`${cart[j].itemName} at $${cart[j].itemPrice}, `
    }
    return stdtext + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`
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
