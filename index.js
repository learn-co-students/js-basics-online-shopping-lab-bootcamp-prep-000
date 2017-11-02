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
  obj[item] = (Math.floor( (Math.random() * 100) ) )

  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var sentence = "In your cart, you have "

  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }

  if (cart.length === 1) {

    var onlyItem = cart[0];
    var onlyKey  = Object.keys(onlyItem).join('');
    var onlyValue = onlyItem[onlyKey];
     sentence += (onlyKey + " at $" + onlyValue + ".");
     return console.log(sentence) }

    for (var i = 0; i < cart.length-1; i++) {
      var item = cart[i];
      var key = Object.keys(item).join('');
      var value = item[key];

      var lastItem = cart[cart.length-1];
      var lastKey = Object.keys(lastItem).join('');
      var lastValue = lastItem[lastKey];
      var lastStr = ("and " + lastKey + " at $" + lastValue + ".");

     if (cart.length === 2) {

      sentence += (key + " at $" + value + " ");
      sentence += lastStr;
      return console.log(sentence)

    } if (cart.length > 2) {

       sentence += (key + " at $" + value + ", ");

      }

    }
    sentence += lastStr;
     return console.log(sentence);
}



function returnValue(obj) {

    for (var key in obj) {

        return obj[key]
    }
}

function total() {
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var cost = returnValue(item)
    total += cost
  }
  return total;
}

function removeFromCart(item) {
   var newCart = [];
   for (var i = 0; i < cart.length; i++) {

     var it = cart[i];
     if (it.hasOwnProperty(item) !== true ) {
       newCart.push(it);
     }
  } cart = newCart;
}



function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
  return console.log("Sorry, we don't have a credit card on file for you.");
} else {
  cart = [];
  return console.log("Your total cost is " + "$" + total() + ", which will be charged to the card " + cardNumber +
  ".");
  }

}
