var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}


function addToCart(item) {//Open function
  var price = Math.floor(Math.random() * 100 + 1);
  var itemsAndPrices = {};
  itemsAndPrices[item] = price;
  cart.push(itemsAndPrices);
  console.log(`${item} has been added to your cart.`);
  return cart;
}//Close function


function viewCart() {//Open function
var inCart = [];
  if (cart.length > 0) {//Open if
    for (var i = 0 ; i < cart.length ; i++) {//Open for
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      console.log(itemAndPrice);
      console.log(item);
      inCart.push(`${item} at $${itemAndPrice[item]}`);
    }//Close for
  var inCartString = inCart.join(', ');
  console.log(`In your cart, you have ${inCartString}.`);
  }//Close if
  else {//Open else
  console.log(`Your shopping cart is empty.`);
  }//Close else
}//Close function

function removeFromCart(removeItem) {//Open function
var itemsInCart = [];
  for (var i = 0 ; i < cart.length ; i++) {//Open for
  var itemAndPrice = cart[i];
  var item = Object.keys(itemAndPrice)[0];
  itemsInCart.push(item);
  }//Close for

  if (itemsInCart.includes(removeItem)) {//Open if
  var indexOfRemoveItem = itemsInCart.indexOf(removeItem);
  cart.splice(indexOfRemoveItem, 1);
  }//Close if
  else {//Open else
  console.log('That item is not in your cart.');
  }//Close else
return cart;
}//Close function

function placeOrder(creditCardNumber) {//Open function
if (creditCardNumber === undefined) {//Open if
console.log('We don\'t have a credit card on file for you to place your order.');
}//Close if
else {//Open else
console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
}//Close else
cart.length = 0;
}//Close function
