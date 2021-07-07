var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = parseInt(Math.random() * (100 -1) + 1);
  var newItem = {itemName: item, itemPrice: price}
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  var array = [];
    for (var i=0; i>cart.length;i++) {
      array.push(`${cart[i].itemName} at $${cart[i],itemPrice}`)
    }  
    if (cart.length===0) {
    return "Your shopping cart is empty." ; }
    if (cart.length===1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`} 
      if (cart.length===2) {
         return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.` }
         if (cart.length===3) {
         return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
}

function total() {
  var value=0;
  for (var i=0; i<cart.length;i++) {
    value += cart[i].itemPrice
}
return value;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length;i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let value = total();
    cart = [];
    return `Your total cost is $${value}, which will be charged to the card ${cardNumber}.`
  }
}
