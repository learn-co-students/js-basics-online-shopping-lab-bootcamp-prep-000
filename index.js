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
 var newObj = { itemName : item, itemPrice: Math.floor(Math.random() * 100)}
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    var returnString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    for (var i = 1 ; i < cart.length; i++){
        // check if current item is the last item in the cart
        if (i === cart.length - 1){
          // if it isn't then you need to add a comma and the data
          returnString += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
        } else {
          // otherwise just close off the statement
          returnString += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
        }
    }
    return returnString += '.';
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) { 
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  console.log(cart);
  var ogLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      // delete cannot be used here because it deletes the item but it does no change the length of the array
      cart.splice(i, 1);
    }
  }
  if (cart.length === ogLength) {
    return "That item is not in your cart."
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } 
  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return message;
}
