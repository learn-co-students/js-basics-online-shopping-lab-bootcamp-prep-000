var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1 );
  var newItem = { itemName: item, itemPrice: price};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
    if (cart.length === 0) {
      return "Your shopping cart is empty.";
      } 
    else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
      else if (cart.length === 2) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      } 
      else {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
              }   
}


function total() {
  var incTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    incTotal = incTotal + cart[i].itemPrice;
  }
  return incTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}
  


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var response = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return response;
  }
}
