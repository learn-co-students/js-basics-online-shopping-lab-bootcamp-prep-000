var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName){
var price = Math.floor(Math.random()*99)
cart.push(new Object({itemName: itemName, itemPrice: price}))
return `${itemName} has been added to your cart.`
return cart
}

function viewCart() {
 var string = "In your cart, you have"
 var array = [];
 if (cart.length === 1 ) {
   return `${string} ${cart[0].itemName} at $${cart[0].itemPrice}.`
   }
 else if (cart.length > 1) {
   for (var i = 0; i < cart.length; i++) {
     if (cart.length - 1 === i) {
       array.push(" and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".")
     } else {
      array.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice)
     }
    }
    return string + array.join()
 } else {
  return `Your shopping cart is empty.`}
 }

 function total() {
   var sum = 0;
   for (var i = 0; i < cart.length; i++) {
     sum += cart[i].itemPrice
   }
   return sum;
 }

 function removeFromCart(itemName){
   for (var i = 0; i < cart.length; i++) {
     if (cart[i].itemName === itemName) {
      cart.splice(i, 1)
     return cart;
   }
 } return `That item is not in your cart.`
}


function placeOrder(cardNumber) {
if (cardNumber === undefined){
  return `Sorry, we don't have a credit card on file for you.`
}
else { let cartTotal = total()
  cart = [];
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  return cart;
  }
}
