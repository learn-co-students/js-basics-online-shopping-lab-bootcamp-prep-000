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
 var price = Math.floor( (Math.random() * 100) + 1) 
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return item + " has been added to your cart."
 
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var s = "In your cart, you have"
  if(cart.length === 1) {
    s += " " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
    return s
  }
  for(var i = 0; i < cart.length; i++) {
    if(i != cart.length - 1) {
      s += " " + cart[i].itemName + " at $" + cart[i].itemPrice + ","
    }
    else {
      s += " and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
    }
  }
  return s
  
}

function total() {
  // write your code here
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++) {
    totalPrice += parseInt(cart[i].itemPrice)
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalPrice = total()
  cart = []
  return "Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber + "." 
}
