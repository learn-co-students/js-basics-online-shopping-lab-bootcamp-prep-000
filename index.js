var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0)
    return "Your shopping cart is empty."
  var currentCart = "In your cart, you have";
  if (cart.length === 1)
    return currentCart + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  for (var i = 0; i < cart.length; i++){
    currentCart += `${i === cart.length - 1 ? ' and': ''} ${cart[i].itemName} at $${cart[i].itemPrice}${cart.length - 1 === i ? '.': ','}`;
  }
  return currentCart;
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var itemNot = "That item is not in your cart."
  
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return itemNot;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    return "Sorry, we don't have a credit card on file for you."
  var sum = total()
  for (var i = 0; i < cart.length; i++){
    removeFromCart(cart[i].itemName)
  }
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
