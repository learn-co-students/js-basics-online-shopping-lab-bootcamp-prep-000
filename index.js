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
 var price = Math.floor(Math.random() * 100)
 var cartItem = {itemName: item, itemPrice: price}
 
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have "
  var length = cart.length;
  if(length === 0){
    return "Your shopping cart is empty."
  }
  for(var i = 0; i < length; i++){
    if(i == length - 1 && i !== 0){
      string += "and "
    }
    var name = cart[i].itemName;
    var price = cart[i].itemPrice;
    string += `${name} at $${price}`;
    var punctuation = (i == length - 1) ? "." : ", ";
    string += punctuation
  }
  return string
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += parseInt(cart[i].itemPrice)
  }
  
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      return cart.splice(i, 1)
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return `Sorry, we don\'t have a credit card on file for you.`
  }
  var num = total()
  cart.splice(0, cart.length)
  return `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`
}

///my functions

