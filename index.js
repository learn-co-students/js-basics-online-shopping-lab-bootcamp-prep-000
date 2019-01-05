var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomNumber(min, max) {
  var r =  Math.random() * (max - min) + min;
  return Math.floor(r)
}

function addToCart(item) {
var price = randomNumber(1, 100)
var subCart = {}
subCart['itemName'] = item
subCart['itemPrice'] = price
cart.push(subCart)
console.log(cart)
  return `${item} has been added to your cart.`
  
}
 

function viewCart() {
  var cartPrint = []
  var cartPrintL = []
  var array2Object = cart[0]
 if (cart.length === 0)  {
  return 'Your shopping cart is empty.'
} else  if (cart.length === 1) {
  cartPrint.push(`In your cart, you have`)
  cartPrint[0]= cartPrint +` ${array2Object.itemName} at $${array2Object.itemPrice}.`
  
} else {
  cartPrint.push(`In your cart, you have`)
  for (var i = 0; i < cart.length -1; i++) {
  array2Object = cart[i];
  
  cartPrint[0]= cartPrint +` ${array2Object.itemName} at $${array2Object.itemPrice},`
  
  }
  array2Object = cart[cart.length -1];
  cartPrint[0]= cartPrint +` and ${array2Object.itemName} at $${array2Object.itemPrice}.`
}
  return cartPrint
  
  }

function total() {
  var cost = [0]
  var array2Object = cart[0]
  for (var i = 0; i < cart.length; i++) {
    array2Object = cart[i];
    cost[0]= cost[0] + array2Object.itemPrice
    
  }
 return cost[0] 
}
var loc = [];
function isTheItemInTheCart(item) {
   var array2Object = cart[0]
   
   for (var i = 0; i < cart.length; i++) {
    array2Object = cart[i];
    if (array2Object.itemName === item) {
      loc = i
    return true
   } else {
   }
   }
   return false
}


function removeFromCart(item) {
if (isTheItemInTheCart(item)) {
  cart.splice(loc,loc)
  
} else {
  return "That item is not in your cart."
}
return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cost = total()
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
 
}