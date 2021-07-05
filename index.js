var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //var obj = Object.assign({},{})
 var obj = {}
 obj.itemName = item
 obj.itemPrice = Math.floor(Math.random() * 100)
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length){
    return 'Your shopping cart is empty.'
  }
  var result = "In your cart, you have "
  if(cart.length == 1){
    return result + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  for (let i = 0; i < cart.length;i++){
    result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    if (i == cart.length - 2){
      return result + `and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
    }
  }
}

function total() {
  // write your code here
   var total = 0
    if (!cart.length){
    return 0
  }
  if(cart.length == 1){
    return cart[0].itemPrice
  }
  for (let i = 0; i < cart.length;i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  if (!cart.length){
    return "That item is not in your cart."
  }
  for (let i = 0; i < cart.length;i++){
    if(cart[i].itemName === item) {
      return cart.splice(i,1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === null || !cart.length){
    return `Sorry, we don't have a credit card on file for you.`
  }
  let t = total()
  cart = []
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}
