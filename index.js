var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*Math.random()+1);
  var itemObject = {};
  itemObject[item] = price;
  cart.push(itemObject);

  var string = item + " has been added to your cart.";
  console.log(string);
  return cart;
}

function viewCart() {
  var string = "In your cart, you have ";
  var empty = "Your shopping cart is empty.";
  var inCart = [];

  if (cart.length) {
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i]) {
        var placeHolder = Object.keys(cart[i]) + " at $" + cart[i][item];
        inCart.push(placeHolder);
      }
    }
    var newString = inCart.join(', ');
    string = string + newString + ".";
    console.log(string);
  }
  else {
    console.log(empty);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    var string = "Your total cost is $" + total() + ", which will be charged to the card " + creditCardNumber + ".";
    console.log(string);
    cart.splice(0,cart.length);
    return cart;
  }
}
