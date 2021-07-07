var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemAndPrice = {itemName: itemName, 
  itemPrice: (Math.floor(Math.random() * 101))};
  cart.push(itemAndPrice);
  return (`${itemName} has been added to your cart.`);

}

function viewCart() {
    if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  else {
    var finalStatement = "In your cart, you have ";
    for (var i = 0; i < cart.length - 1; i++) {
      var addToStatement = `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      finalStatement = finalStatement.concat(addToStatement);
    }
    var lastPartStatement = `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    finalStatement = finalStatement.concat(lastPartStatement);
    return finalStatement;
  }
}

function total() {
   var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
    var updatedCart = cart;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      updatedCart = cart.splice(i, 1);
    }
  }
  if (cart === updatedCart) {
    return "That item is not in your cart.";
  }
  else {
    return updatedCart;
  }
}

function placeOrder(cardNumber) {
   if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
    var totalAmount = total();
    cart = []; 
    return (`Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`)
  }
}
