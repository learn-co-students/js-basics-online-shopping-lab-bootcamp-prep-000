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
 var itemPrice = Math.floor(Math.random() * (100) + 1);
 var itemObj = {itemPrice: itemPrice, itemName: item};
 cart.push(itemObj);
 return (`${item} has been added to your cart.`)
 return cart
 }
 // end it here


function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return ('Your shopping cart is empty.')
  }
  else if(cart.length ===1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  else if(cart.length ===2) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  else if(cart.length > 2) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
  }
  // end it here
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++){
    total+=cart[i].itemPrice
  }
return total
  // end it here
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice (i,1);
      return cart
    }
  }
  return "That item is not in your cart."
  // end it here
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total()
if (!cardNumber) {
  return "Sorry, we don't have a credit card on file for you."
}
else if(cardNumber) {
  setCart([])
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    }
  // end it here
}
