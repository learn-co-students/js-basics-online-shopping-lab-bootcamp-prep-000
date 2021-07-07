var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var addCart = {itemName: `${item}`, itemPrice: Math.random() * (100 - 1) + (1)}
 cart.push(addCart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function sumAll(){
 var sum = 0
  for (let i=0; i<getCart().length; i++) {
 sum = sum + getCart()[i].itemPrice
     }
 return sum
  }

function total() {
var allsum = sumAll()
return allsum
}


function removeFromCart(item) {
  var sol = cart.findIndex(i => i.itemName === item)
  
  if ( sol >= 0) {
   cart.splice(sol, 1)
    }
  
return "That item is not in your cart." 
    
  
}

function placeOrder(cardNumber) {
if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
    var final = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart= []
    return final
}
