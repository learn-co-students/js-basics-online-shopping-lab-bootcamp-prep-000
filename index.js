var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(item +' has been added to your cart.');
  return item + " has been added to your cart.";
}

function viewCart() {
  if (0 === cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    var newArr = [];
    for (var i = 0; i < cart.length; i++) {
      var price = Object.keys(cart[i]);
      for (var price in cart[i]) {
        newArr.push(`${Object.keys(cart[i])} at $${cart[i][price]}`)
      }
    }
    return console.log("In your cart, you have " + newArr.join(", ") + ".");
  }
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }
   return t
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  var emptyArray = [];
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)    
    setCart(emptyArray)
  }
}
