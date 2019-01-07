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
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1});
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var temp = `In your cart, you have`
    if (cart.length === 0) {
      return "Your shopping cart is empty."
    }
    for (var x = 0; x<cart.length; x++) {
      if(cart.length == 1){
        temp = `${temp} ${cart[x].itemName} at $${cart[x].itemPrice}.`
      }
      else if (x == (cart.length) - 1) {
        temp = `${temp} and ${cart[x].itemName} at $${cart[x].itemPrice}.`
      } 
      else {
      temp = `${temp} ${cart[x].itemName} at $${cart[x].itemPrice},`
      }
    }
    return temp
}

function total() {
  // write your code here
  var totalCost = 0
  for (var x = 0; x<cart.length; x++) {
    totalCost = totalCost + cart[x].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (var x = 0; x<cart.length; x++) {
    if (cart[x].itemName == item) {
      cart.splice(x, 1);
      return cart;  
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else { 
    var t = total() 
    cart.splice(0, cart.length)
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}
