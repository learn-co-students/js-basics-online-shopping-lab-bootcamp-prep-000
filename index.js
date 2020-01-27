var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var items = {itemName: `${item}`, itemPrice: Math.max(Math.random() * Math.floor(100),1)}
 cart.push(items)
 return `${item} has been added to your cart.`
 }

function viewCart() {
  // write your code here
  var beginningMessage = "In your cart, you have"
  var totalMessage = new Array()
  var itemAndPrice = new Array()
  if(cart.length < 1){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
   return `${beginningMessage} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else {
  for(let i = 0; i < cart.length -1; i++){
    itemAndPrice.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  itemAndPrice.push(` and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`)
  totalMessage.push(itemAndPrice)
  return `${beginningMessage}${itemAndPrice}`
  
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  for( let i = 0; i < cart.length; i ++){
   totalPrice = totalPrice + cart[i].itemPrice 
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var indexCheck = -1
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      indexCheck = i
      cart.splice( i, 1)
      return cart
    }
    
  }
  if(indexCheck === -1){
      indexCheck = "That item is not in your cart."
      return indexCheck
  }
}

function placeOrder(cardNumber) {
  // write your code here
  
  var totalPrice = total()
  
  if (cardNumber){
    cart = new Array()
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }else{return("Sorry, we don't have a credit card on file for you.")}
}
