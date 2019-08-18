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
  if( i > 1){ //else or switch case
    for(let j = 0; j < cart.length - 1; j++) {
      stdtext +=`${cart[j].itemName} at $${cart[j].itemPrice}, `
    }
    return stdtext + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`
  }
}

function total() {
  var totalPrice = 0
  for(let i = 0; i != cart.length; i++){ //index and lenght index will always be minor than the //lenght is possible to use != or <
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i, 1)
      return cart
    } 
    
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var finalPrice = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return finalPrice
  }
}
