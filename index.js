var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * Math.floor(100));
 var itemDetails = {};
 itemDetails.itemName = item;
 itemDetails.itemPrice = price;
 cart.push(itemDetails)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  var cartmessage = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } 
  for (var i = 0; i < cart.length; i++) {
      cartmessage.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  } 
  if (cart.length > 1) {
  var j = (cart.length - 1)
  cartmessage.pop()
  cartmessage.push(`and ${cart[j].itemName} at $${cart[j].itemPrice}`)}
  return `In your cart, you have ${cartmessage.join(", ")}.`
}

function total() {
  var costsum = 0;
  for (var t = 0; t < cart.length; t++ ) {
    costsum = costsum + cart[t].itemPrice;
  } return costsum;
}

function removeFromCart(item) {
  for (var l = 0; l < cart.length; l++) {
    if (item === cart[l].itemName) {
      cart.splice(l, 1)
      return cart
      } 
  } return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) { //null did not work, replaced with undefined
    return "Sorry, we don't have a credit card on file for you."
  }
  else 
  var totalcost = total();
  cart = [];
  return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`
}
