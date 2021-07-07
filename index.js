var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var price = Math.floor(Math.random()*(100-1 +1))+1
// var obj = Object.assign({},{itemName:item,itemPrice:price});
// cart.push(obj)
// return `${obj.itemName} has been added to your cart.` 
  
  cart.push({itemName:item,itemPrice:price})
   return `${item} has been added to your cart.` 
}

function viewCart() {
  var str = ""
 
  if (cart === undefined || cart.length === 0){
    str +="Your shopping cart is empty."
  } else {
    str += "In your cart, you have "
    for (var i = 0; i < cart.length; i++){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}` 
      if (i === cart.length - 1){
        str += "."
      } else if (i === cart.length-2){
        str += ", and "
      } else {
        str += ", "
      }
    }
  }
  return str
}

function total() {
   // write your code here
  var total = 0  
  for (var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }  
  return total;
}

function removeFromCart(item) {
  // write your code here
  if (cart === undefined || cart.length === 0){
    return "That item is not in your cart."
  } else {
    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i,1)
      }
    }  
  return cart
  }
 
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var amount = total()
    cart.splice(0)
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
  }
  
}
