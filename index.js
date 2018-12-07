var cart = [];
var newObject = {}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor((Math.random() * 100) + 1);
  newObject = {itemName: item, itemPrice: price}
  cart.push(newObject)

  if(cart.length > 0){
    return `${newObject.itemName} has been added to your cart.`
  }else{
    return "Your shopping cart is empty."
  }
}
addToCart("mocha")
function viewCart() {
  
  // write your code here
  var string = "In your cart, you have "
  if(cart.length === 1){
    return string +=`${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if(cart.length > 1){
    for(var i = 0; i < cart.length; i++){
      if(i === cart.length - 1){
        string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        
      }else{
        string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
   return string
  }else{
    return "Your shopping cart is empty."
  }
}
viewCart()
function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}
function removeFromCart(item) {
  // write your code here
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      if(cart[i].itemName === item){
        cart.splice(i, 1)
      }
    }
  }else{
    return "That item is not in your cart."
  }
  return cart
}
removeFromCart("welcome")

function placeOrder(cardNumber) {
  // write your code here
  var newTotal = total();
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart = []
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  }
}