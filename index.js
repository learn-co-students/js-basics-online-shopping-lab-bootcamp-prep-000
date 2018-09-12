var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1)) + 1});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var nameAndPrice = [];
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      nameAndPrice.push(cart[i].itemName + " at " +  "$" + cart[i].itemPrice);
    }
  }
  
  if (cart.length == 1) {
    return `In your cart, you have ${nameAndPrice}.`;
  }
  
  else if (cart.length == 2) {
    return `In your cart, you have ${nameAndPrice[0]}, and ${nameAndPrice[1]}.`;
  }  
  
  else if (cart.length >= 3) {
    return `In your cart, you have ${nameAndPrice[0]}, ${nameAndPrice[1]}, and ${nameAndPrice[2]}.`;
  }
  else {
    return "Your shopping cart is empty.";
  }
}

function total() {
var totale = 0;
for (var j = 0; j < cart.length; j++) {
  totale += cart[j].itemPrice;
}
return totale;
}


function removeFromCart(item) {
  for (var k = 0; k < cart.length; k++) {
    if (cart[k].itemName == item) {
      cart.splice(k, 1);
      return cart;
    }
}
return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var total2 = total();
  cart = [];
  if (cardNumber !== undefined) {
    return `Your total cost is $${total2}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
