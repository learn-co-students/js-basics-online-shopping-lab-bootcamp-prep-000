var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newItem = { itemName:item, itemPrice: Math.floor(Math.random()*100+1) }
 
 cart.push(newItem)
 
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length > 2) {
    var sentence = `In your cart, you have `
    for (var i=0; i<cart.length-1; i++) {
      if (i==cart.length-2) {
        sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice} `
      } else {
      sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    } 
    sentence = sentence + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return sentence
  }
    
}

function total() {
  var sum = 0;
  for (var i = 0; i <cart.length; i++) {
    sum = sum + cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i <= cart.length-1; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (typeof cardNumber == 'undefined') {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost=total();
    cart.splice(0,cart.length);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
