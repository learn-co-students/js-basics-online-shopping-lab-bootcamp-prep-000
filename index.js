var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
cart.push({itemName: item, itemPrice: price});
return `${item} has been added to your cart.`;
 // console.error(cart)
 // { "daikon": 40}
//  { itemName: "daikon", itemPrice: 40} 

}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    var cartItems = "In your cart, you have ";
    for(var i = 0; i < cart.length - 1; i++){
      cartItems = cartItems + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  return cartItems + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`
  }
  }


function total() {
  // start at 0
  // for each item in the getCart
  // add itemPrice
  //return accumulator
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
 
for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
if (item != cart[item]) {
    return "That item is not in your cart.";
  }

}

function placeOrder(cardNumber) {
   var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
   if(cardNumber) {
     cart = [];
     return message

    } else {
      return "Sorry, we don\'t have a credit card on file for you."
  }
  cart = [];
}
