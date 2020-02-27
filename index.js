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
 var itemObj = {itemName : item, itemPrice :Math.floor(Math.random() * Math.floor(100))}
 cart.push(itemObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var str = "In your cart, you have "
  if (cart.length === 0) {
    str = "Your shopping cart is empty."
  }
  else if(cart.length === 1) {
    str = str + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  }
  else {
  for(var i = 0; i < cart.length; i++) {
    str = str + (i< cart.length - 1 ? "" : "and ") + cart[i].itemName + " at $" + cart[i].itemPrice + (i< cart.length - 1 ? ", " : ".");
  }
  }
  return str
}

function total() {
  // write your code here
  var total = 0
    for(var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var inCart = false
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1); 
      inCart = true
    }
  }
  return inCart ? cart: "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return str
  }
}
