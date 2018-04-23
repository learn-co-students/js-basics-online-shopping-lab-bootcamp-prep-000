var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ "itemName": `${item}`, "itemPrice": Math.floor(Math.random() * 101) });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var statement = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `;
    for (var i=1, l=cart.length; i<l-1; i++) {
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    statement += `and ${cart[l-1].itemName} at $${cart[l-1].itemPrice}.`;
    return statement;
  }
}

function total() {
  var totalPrice = 0;
  for (var i=0, l=cart.length; i<l; i++) {
    totalPrice += parseInt(`${cart[i].itemPrice}`);
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (var i=0, l=cart.length; i<l; i++) {
    if (`${item}` === `${cart[i].itemName}`) {
      cart.splice(i,1);
      return cart;
    } 
  } return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var totalCost = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
