var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var pricey = 0

var objectifiedItem = {}

function addToCart(item) {
  
  pricey = Math.floor(Math.random() * (100 - 1) + 1)
  
  objectifiedItem = {itemName : item, itemPrice : pricey}
  
  cart.push(objectifiedItem)
  
  return `${[item]} has been added to your cart.`
}        


function viewCart() {
  var y = cart.length
  var message = []
  var firstOne = []
  var lastOne = []
  var v = (y - 1)
  
  if (cart.length === 1) {
      message.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
      return `In your cart, you have ${[message]}.`
    }
  if (cart.length === 2) {
    
    lastOne.push(`${cart[v].itemName} at $${cart[v].itemPrice}`)
    
    for (var i = 0; i < (cart.length - 1); i++) {
        message.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  return `In your cart, you have ${[message]}, and ${[lastOne]}.`
  }
  
  if (cart.length >= 3) {
     lastOne.push(`${cart[v].itemName} at $${cart[v].itemPrice}`)
     firstOne.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
    
    for (var b = 1; b < (cart.length - 1); b++) {
        message.push(`${cart[b].itemName} at $${cart[b].itemPrice}`)
    }
  return `In your cart, you have ${[firstOne]}, ${[message]}, and ${[lastOne]}.`
  }

else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totalPrice = 0
  var priceArray = []
  var subtotal = 0
  
  for (var i = 0; i < cart.length; i++) {
     subtotal += (cart[i].itemPrice)
  }
  return subtotal
}


function removeFromCart(item) {
  var arrayish = []
  var itemy = `${item}`
  for (var b = 0; b < cart.length; b++) {
    arrayish.push(cart[b].itemName)
  }
  
  var a = arrayish.indexOf(itemy)
  
  if (a === -1) {
    return "That item is not in your cart."
  }
  
  else {
    cart.splice (a, 1)
    return cart
  }
}




function placeOrder(cardNumber) {
  var x = 0 + cardNumber
  var z = cart.length
  var y = total()
  
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
    
  else {
    cart.splice(0, z)
    return `Your total cost is $${[y]}, which will be charged to the card ${cardNumber}.`
  }
  
  
  
  // write your code here
}

///if (thang.equals(itemy) === true)

///var carty = [cart]



///function viewCart() {
  ////var x = 0
  ////var y = cart.length
  
  ///var newArray = []
  ////var message = []
  
  ////if (y === 0) {
    ////return "Your shopping cart is empty."
  ///}
  
  ////else{
      ////for (var i = 0; i < y; i++) {
        ////newArray.push(cart[i].itemName, cart[i].itemPrice)
        ////}
      /////message.push(`${newArray[x]} at $${newArray[(x + 1)]}`)
      ////x++
      ///}
    ////return `In your cart, you have ${[message]}.`
  ///}
  
  
  
  
  
  
  
  
  

///function viewCart() {
  ///var x = 0
  ////var y = cart.length
  
  ///var newArray = []
  ///var message = []
  ///var v = (y - 1)
  ///if (y === 0) {
    ///return "Your shopping cart is empty."
  ///}
  
  ///else{
    ///if (y === 1) {
      ///for (var i = 0; i < y; i++) {
        ///message.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
        ///i
      ///}
      ///return `In your cart, you have ${[message]}.`
  ///}
  
  ///for (var b = 0; b < y)
  
  ///cart[i].itemName
  
  
  
  
  ///function viewCart() {
  ///var y = cart.length
  ///var message = []
  //var firstOne = []
///var lastOne = []
  ///var v = (y - 1)
  
  ///if (cart.length === 1) {
      ///message.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
      ///return `In your cart, you have ${[message]}.`
    ///}
  ///if (cart.length > 1) {
    
    ///lastOne.push(`${cart[v].itemName} at $${cart[v].itemPrice}`)
    
    ///for (var i = 0; i < (cart.length - 1); i++) {
        ///message.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    ///}
  ///return `In your cart, you have ${[message]}, and ${[lastOne]}.`
  ///}

///else {
    ///return "Your shopping cart is empty."
  ///}
///}


 ///for (i = 0; i < cart.length; i++) {
    ///priceArray.push(cart[i].itemPrice)
    ///return priceArray
    
    ///for(var i = 0; i < cart.length; i++) {
    ///if (cart[i].itemName === item) {
      ///var removed = cart.splice(i, 1)
      ///return removed
    ///}
    ///else return "That item is not in your cart."
  ///}
///}



///function removeFromCart(item) {
  ///var carty = [cart]

  ///for(var i = 0; i < carty.length; i++) {
    ////if (item === carty[i].itemName) {
      ///carty.prototype.splice(i, 0)
    ///}
    ///else return "That item is not in your cart."
  ///}
///}



///function removeFromCart(item) {
  
  ///var itemy = `${item}`
  ///var carty = [cart]
  
  ///for(var i = 0; i < carty.length; i++) {
    ///if (carty[i].itemName === itemy) {
      ///carty.splice(i, 1)
      ///return carty
    //}
    ///else {
      ///return "That item is not in your cart."
    ///}
  ///}
///}
