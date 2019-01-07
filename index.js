var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var int = Math.floor(Math.random()*100)+1;
  var tempObj = {[item]: int};
  cart.push(tempObj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 2) {
    var sentence = "In your cart, you have "

    for(var i=0;i<cart.length;i++) {

      var cartItem=cart[i]
      var itemName = Object.keys(cartItem)
      var itemPrice = cartItem[itemName]
      //var cartPrices = Object.values(cart)
      if (i === cart.length - 1) {
        sentence = sentence + itemName + " at $" + itemPrice + "."
      }
      else {
        sentence = sentence + itemName + " at $" + itemPrice + " and "
      }
  }
  console.log(sentence)
}
  else {
    var sentence = "In your cart, you have "

    for(var i=0;i<cart.length;i++) {

      var cartItem=cart[i]
      var itemName = Object.keys(cartItem)
      var itemPrice = cartItem[itemName]
      if (i === cart.length - 1) {
        sentence = sentence + itemName + " at $" + itemPrice + "."
      }
      else if (i === cart.length - 2) {
        sentence = sentence + itemName + " at $" + itemPrice + ", and "
      }
      else {
        sentence = sentence + itemName + " at $" + itemPrice + ", "
      }
    }
    console.log(sentence)
  }
} //end of viewCart

function total() {
  var total = 0
  for (var i=0; i<=cart.length - 1;i++) {
    var cartItem = cart[i]
    var itemName = Object.keys(cartItem)
    var itemPrice = cartItem[itemName]
    total = total + itemPrice
  }
  return total
}

function removeFromCart(item) {
  const testLength = cart.length;
  for (var i=0; i<cart.length;i++) {
    var tempObj = cart[i];
    if(tempObj.hasOwnProperty(item)) {
      cart.splice(i,1);
    }
    else {
      //do nothing
    }
  }
  if (testLength === cart.length) {
    console.log("That item is not in your cart.");
    return cart;
  }
  else {
    return cart;
  }


/*
  if(cart.hasOwnProperty(item) === false) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return cart
  }
  else {
  return cart
  }//end else
*/

}//end fn

function placeOrder(cardNumber) {
  if (cardNumber != null) {
    var cartTotal = total();
    var sentence = ""
    sentence = "Your total cost is $" + cartTotal + ", which will be charged to the card " + cardNumber + ".";
    //"Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.";
    console.log(sentence);
    cart.length = 0;
    return cart;
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
