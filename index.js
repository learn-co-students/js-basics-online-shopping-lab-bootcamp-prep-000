var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
       var keyvalue = {itemName : item, itemPrice : Math.floor(Math.random() * 100)};
       cart.push(keyvalue)
       return `${item} has been added to your cart.`;
   }

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    returnString = "Your shopping cart is empty.";
  } else {
    var returnString = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      if (i === cart.length - 1 && cart.length !== 1){
        returnString = returnString + `and ${cart[i].itemName} at $${cart[i].itemPrice}, `;
      } else {
          returnString = returnString + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    returnString = returnString.substr(0, returnString.length -2) + ".";
    }
    return returnString;
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++){
    cartTotal += cart[i].itemPrice
  }
  return cartTotal;
}

function removeFromCart(item) {
    var found = false;
    for (var i = 0; i < cart.length; i++){
        if (item == cart[i].itemName){
            console.log(i)
            cart.splice(i,1)
            found = true;
        }
    }
    if (found === false) {
        return "That item is not in your cart."
    } else {
        return cart;
    }
}

function placeOrder(cardNumber) {
  if (cardNumber === null || cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  }
