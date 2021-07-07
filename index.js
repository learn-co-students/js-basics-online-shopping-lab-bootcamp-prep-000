var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() *(100 - 1) + 1);
  cart.push({itemName: item, itemPrice: itemPrice});
   return `${item} has been added to your cart.`
}
function viewCart() {
  var statement1 = 'In your cart, you have'
  if (cart.length === 0) {
  return 'Your shopping cart is empty.'
  }
  else if (cart.length === 1) {
      return `${statement1} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else if (cart.length === 2) {
      return `${statement1} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    }
    else if (cart.length >= 3) {
        var statement2 = ''
      for (var i = 0; i < cart.length-1; i++) {
        statement2 += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
        var statement3 =`and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
      return `${statement1} ${statement2}${statement3}.`
    }
}

function total() {
var runningTotal = 0
for(var i = 0; i < getCart().length; i++) {
 getCart()[i].itemPrice
  	runningTotal = runningTotal + getCart()[i].itemPrice
   }
 return runningTotal
}
function removeFromCart(item) {
    for( var i = 0; i < getCart().length; i++){
   
   if (item === `${getCart()[i].itemName}`) {
      getCart().splice(i, 1)
      return getCart
      }
      }
    return "That item is not in your cart."
}
function placeOrder(cardNumber) {
 if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you."
  
 } else {
   var s = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return s
 }
}
 
