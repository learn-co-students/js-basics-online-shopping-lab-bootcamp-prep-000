function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = getRandomIntInclusive(1, 100);
  var item = { [itemName]: itemPrice };
  cart.push(item);
  console.log (`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  
  var itemList = [];
  for (var i = 0; i < cart.length; i++) {
    itemList.push(Object.keys(cart[i]));
  }
  
  var priceList = [];
  for (var j = 0; j < cart.length; j++) {
    priceList.push(Object.values(cart[j]));
  }
  
  var contents = "In your cart, you have";
  
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    console.log (contents + ` ${itemList[0]} at $${priceList[0]}.`);
  }
  else if (cart.length === 2) {
    console.log (contents + ` ${itemList[0]} at $${priceList[0]} and ${itemList[1]} at $${priceList[1]}.`);  
  }
  else {
    for (var k = 0; k < cart.length - 1 ; k++) {
      contents = contents + ` ${itemList[k]} at $${priceList[k]},`
    }
    contents = contents + ` and ${itemList[cart.length - 1]} at $${priceList[cart.length - 1]}.`
    console.log (contents)
  }
}

function total() {
  
  var priceList = [];
  for (var i = 0; i < cart.length; i++) {
    priceList.push(Object.values(cart[i]));
  }
  
  var sum = 0
  for (var j = 0; j < priceList.length; j++) {
    sum = sum + parseInt(priceList[j])
  }
  return sum
}

function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log ("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  var cost = total()
  if (isNaN(cardNumber)) {
    console.log ("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log (`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
