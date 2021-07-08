var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj["itemName"] = item;
  obj["itemPrice"] = Math.floor((Math.random() * 100)+1);
  cart.push(obj);

  return item + " has been added to your cart.";
}

function viewCart() {
  var msg;

  var i = 0;
  var length = cart.length;
  var tmpObj = {};

  if ( length == 0 ) {
    msg = "Your shopping cart is empty.";
  } else if ( length == 1 ) {

    tmpObj = cart[0];
    msg = "In your cart, you have " + tmpObj['itemName'] + " at $" + tmpObj['itemPrice'] + "."

  } else if ( length == 2 ) {
    tmpObj = cart[0];
    msg = "In your cart, you have " + tmpObj['itemName'] + " at $" + tmpObj['itemPrice'];

    tmpObj = cart[1];
    msg += ", and " + tmpObj['itemName'] + " at $" + tmpObj['itemPrice'] + "."

  } else {
    msg = "In your cart, you have ";

    for ( ; i < length ; i++ ) {
      tmpObj = cart[i];

      if ( i == (length -1)) {
        msg += "and " + tmpObj['itemName'] + " at $" + tmpObj['itemPrice'] + "."
        break;
      } else {
        msg += tmpObj['itemName'] + " at $" + tmpObj['itemPrice'] + ", "
      }
    }
  }


  return msg;
}

function total() {
  var total = 0;

  var i = 0;
  var length = cart.length;
  var tmpObj = {};

  if ( length == 0 ) {
    total = 0;
  } else {

    for ( ; i < length ; i++ ) {
      tmpObj = cart[i];
      total += parseInt(tmpObj['itemPrice']);

    }
  }

  return total;
}

function removeFromCart(itemName) {
  var msg = "";

  var i = 0;
  var length = cart.length;
  var tmpObj = {};

  if ( length == 0 ) {
    msg = "";
  } else {

    for ( ; i < length ; i++ ) {
      tmpObj = cart[i];
      if (tmpObj['itemName'] == itemName) {
        cart.splice(i,1);
        return cart;
      }
    }
  }

  return msg = "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var msg;

  if (typeof(cardNumber) === 'undefined' || cardNumber == "") {
      msg = "Sorry, we don't have a credit card on file for you.";

  } else {
      msg = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".";
      cart = [];
  }

  return msg;

}
