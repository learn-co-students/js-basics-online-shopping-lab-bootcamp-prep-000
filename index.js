var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var addedItem = { [item]: itemPrice };
  cart.push(addedItem);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var verbalList = [];
    for (var i = 0; i < cart.length; i++) {
      var singleItem = cart[i];
      var itemName = Object.keys(singleItem);
      var itemCost = singleItem[itemName];
      verbalList.push(`${itemName} at $${itemCost}`);
    }
    if (verbalList.length > 2) {
    console.log(`In your cart, you have ${verbalList.join(', ').replace(/,(?!.*,)/gmi, ', and')}.`);
  } else {
    console.log(`In your cart, you have ${verbalList.join(', ').replace(/,(?!.*,)/gmi, ' and')}.`);
  }
  }
}

function total() {
  var itemPrices = [];
  for (var i = 0; i < cart.length; i++) {
    var singleItem = cart[i];
    var itemName = Object.keys(singleItem);
    var itemCost = singleItem[itemName];
    itemPrices.push(itemCost);
  }
  var sum = itemPrices.reduce((a, b) => a + b, 0);
  return sum;
}

function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var itemInCart = true;
      cart.splice(i,1);
    }
  }
  if (itemInCart = true) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    total();
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
