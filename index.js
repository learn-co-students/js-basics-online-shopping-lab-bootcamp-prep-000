var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 };
 cart.push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  var cartString = "";
  var cartItems = [];
  var i = 0;
  if (cart.length === 0) {
    cartString = "Your shopping cart is empty";
  } else if (cart.length === 1) {
      cartString = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
  } else if (cart.length > 1) {
    for (i = 0; i < cart.length; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    cartString = `In your cart, you have ${cartItems.slice(0, -1).join(', ')}, and ${cartItems.slice(-1)}`;
  }
  return `${cartString}.`;
}

function total() {
  let totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  console.log(item);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    let totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}