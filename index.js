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
 var object = {};
 object.itemName = item;
 object.itemPrice = Math.floor(Math.random() * 100) + 1;
 cart.push(object)
 return `${object.itemName} has been added to your cart.`

}

function viewCart() {
  // write your code here
  let string = ""
  if (cart.length < 1 ) {
    return "Your shopping cart is empty."
  } else {
    if(cart.length == 1){
      string = string + `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else if(cart.length == 2) {
      string = string + `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    } else {
      string = string + `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    }
    return string
  }
}

function total() {
  // write your code here
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var index;
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].itemName == item) {
      index = i;
    }
  }
  if(index){
    return cart.splice(index, 1)

  } else {
    return "That item is not in your cart."
  }

}

function placeOrder(cardNumber) {
  // write your code here

  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return string;
  }

}
