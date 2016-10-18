var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
let t = 0;

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100-0+1))+0;
  cart.push({[item] : price});
  console.log(item + ' has been added to your cart.');

  return cart;
}

function viewCart() {
  var newStr = 'In your cart, you have';
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        newStr += ' ' + item + ' at $' + cart[i][item] + ',';
      }
    }
    var modString = newStr.slice(0, -1);
    modString += '.';
    console.log(modString);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, i+1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
}

function placeOrder(ccNum) {
  if (ccNum !== undefined) {
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' +
    ccNum + '.');
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }

  cart = [];
}
