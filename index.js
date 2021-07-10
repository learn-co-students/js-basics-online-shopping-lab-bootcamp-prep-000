var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor (Math.random() * 100) ;
  var itemObject = {itemName: item, itemPrice: Price} ;
  cart.push (itemObject);
  return ${itemName} has been added to your cart.;

 }

function viewCart() {
if (!cart.length) {
  return "Your shopping cart is empty.";
}
else if (cart.length === 1) {
   string = string.concat(`${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`);
  }
  else if (cart.length === 2) {
    string = string.concat(`${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`);
  }
  else {
    for (let i = 0; i < cart.length - 1; i++) {
      string = string.concat(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `);
    }
    string = string.concat(`and ${cart[cart.length - 1]["itemName"]} at $${cart[cart.length - 1]["itemPrice"]}.`);
  }
  return string;



function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal = cart[i].itemPrice + cartTotal
  }
  return cartTotal;
}

function removeFromCart(item) {
  if (item === cart[i].itemName) {
    cart.splice (i,1);
    return cart;
  }
return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var orderCost = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  cart = [];
  return "Your total cost is $${orderCost}, which will be charged to the card ${cardNumber}.";
  }
