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
 var price = Math.floor(Math.random()*100) + 1
 let itemObject = {itemName: item, itemPrice: price}
 cart.push(itemObject)
 return `${itemObject.itemName} has been added to your cart.` 
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
   else {
    var message1 =  `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice},`
    
    for(let i = 2; i < cart.length; i++) {
      if(i === cart.length - 1) {
        message1 = `${message1} and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
      else {
        message1 = `${message1}, ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
    }
    return message1
  }
}

function total() {
  // write your code here
  var counter = 0;
for (var i = 0; i < cart.length; i++) {
  counter = cart[i].itemPrice + counter
}  
return counter
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }

    }
    return `That item is not in your cart.`
  }
  

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
   var cost = total()
   cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
