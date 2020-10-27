var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice() {
  return Math.floor(Math.random() * 100) + 1; // 1 - 100
}

function addToCart(item) {
  var itemToAddToCart = new Object({itemName: item});
  itemToAddToCart.itemPrice = getRandomPrice();
  cart.push(itemToAddToCart);
  return `${itemToAddToCart.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var outputString = "";
  if(cart.length == 0) {
    return "Your shopping cart is empty.";
  }
  else if(cart.length == 1) {  //Single Item cart
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`
  }
  else { //2+ item cart
    outputString = "In your cart, you have ";
    for(var i = 0; i < cart.length - 1; i++) {
      //This loop should be every item EXCEPT the last one. Last one being (.length - 1)
      var currentCartItem = cart[i];
      outputString += `${currentCartItem.itemName} at $${currentCartItem.itemPrice}, `;
    }
    currentCartItem = cart[cart.length - 1]; // last item
    outputString += `and ${currentCartItem.itemName} at $${currentCartItem.itemPrice}.`;

  }
  return outputString;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i ++) { 
    totalPrice += parseInt(cart[i].itemPrice, 10);
    
  }
  return totalPrice;
}

function removeFromCart(item) {
  var nameArry = [];
  for(var i = 0; i < cart.length; i++) { 
    nameArry[i] = cart[i].itemName;
  }
  var indexOf = nameArry.indexOf(item);
  if(indexOf < 0) { 
    return "That item is not in your cart.";
  }
  else { 
    var newArry = cart.splice(indexOf, 1)
    return newArry;
  }
  //Not entirely sure why this works. 
}

function placeOrder(cardNumber) { // Luhn required? 
  // write your code here
  if(isNaN(cardNumber)) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    let s = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "."
    cart = new Object([]);
    return s;
         
  }
}
