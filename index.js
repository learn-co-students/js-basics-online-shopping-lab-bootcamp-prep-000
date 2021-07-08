var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var p = (Math.floor((Math.random()+.01) * 100))

cart.push({[item]: p})

console.log(`${item} has been added to your cart.`);

return cart
}

function viewCart() {
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  }

  var newList = []

  for (var i = 0; i < cart.length; i++) {
     var holder = cart[i];
     var item = Object.keys(holder)[0];
     var price = holder[item];
     newList.push(`${item} at \$${price}`)
  }

  if (cart.length === 1) {
    return console.log(`In your cart, you have ${newList}.`);
  } else if (cart.length === 2) {
    return console.log(`In your cart, you have ${newList[0]} and ${newList[1]}.`);
  } else {
    return console.log(`In your cart, you have ${newList.slice(0,newList.length-1).join(', ')}, and ${newList.slice(-1)}.`);
  }
}

function total() {
var priceArr = 0
  for (var i = 0; i< cart.length; i++) {
    var holder = cart[i];
    var item = Object.keys(holder)[0]
    var price = holder[item]
    priceArr += price
  }
  return priceArr;
}

function removeFromCart(item) {
  var isFalse = false;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isFalse = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1))
      l--;
    }
  }
  if (!isFalse) {
    console.log('That item is not in your cart.');
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return false;
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}
