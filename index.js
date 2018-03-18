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
 var newObj = {
   itemName: item,
   itemPrice: Math.ceil(Math.random()*100)
  }
  cart.push(newObj)
  return `${newObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var message = ""
  if (cart.length === 0){
    message = "Your shopping cart is empty."
  }
  else{
    message = "In your cart, you have "
    for (let i = 0; i < cart.length; i++){
      message = `${message}${cart[i].itemName} at $${cart[i].itemPrice}`
      
      if (i < cart.length - 2){
        message = `${message}, `
      }
      else if(i === cart.length - 2){
        message = `${message}, and `
      }
      else{
        message = `${message}.`
      }
    }
  }
  return message
}

function total() {
  // write your code here
  var sum = 0
  for(let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName == item){
      cart.splice(i,1)
      return `${item} was removed from your cart.`
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var cartTotal = total()
    cart.length = 0
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}

addToCart('squash')
addToCart('veggies')
addToCart('soda')
var report = removeFromCart('veggies')
console.log(report)

console.log(viewCart())