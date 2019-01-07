var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var newItem = {[item]: price};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1){
    var oneItem = Object.keys(getCart()[0])[0];
    var onePrice = getCart()[0][oneItem];
    console.log(`In your cart, you have ${oneItem} at \$${onePrice}.`);
  } else if (cart.length === 2){
    var twoItem1 = Object.keys(getCart()[0])[0];
    var twoPrice1 = getCart()[0][twoItem1];
    var twoItem2 = Object.keys(getCart()[1])[0];
    var twoPrice2 = getCart()[1][twoItem2];
    console.log(`In your cart, you have ${twoItem1} at \$${twoPrice1} and ${twoItem2} at \$${twoPrice2}.`);
  } else {
    var multiItem = Object.keys(getCart()[0])[0];
    var multiPrice = getCart()[0][multiItem];
    var cartMsg = `In your cart, you have ${multiItem} at \$${multiPrice}`;
    var i = 1;
    while (i < (cart.length - 1)){
      multiItem = Object.keys(getCart()[i])[0];
      multiPrice = getCart()[i][multiItem];
      cartMsg = cartMsg + `\, ${multiItem} at \$${multiPrice}`
      i++;
    }
      multiItem = Object.keys(getCart()[i])[0];
      multiPrice = getCart()[i][multiItem];
      cartMsg = cartMsg + `\, and ${multiItem} at \$${multiPrice}.`
      console.log(cartMsg);
  }
}

function total() {
  var i = 0;
  var total = 0;
  var currentItem = Object.keys(getCart()[i])[0];
  while (i < cart.length){
    currentItem = Object.keys(getCart()[i])[0];
    total = total + getCart()[i][currentItem];
    i++;
  }
  return total;
}

function removeFromCart(item) {
  // Need to find out the index matching the item //
  var i = 0;
  var foundItem = false;
  while ((i < cart.length) && (foundItem === false)){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      foundItem = true;
    } else {
      i++;
    }
  }
  if (foundItem===false){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
