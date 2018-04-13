var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
item = {itemName: `${item}`, itemPrice: Math.floor((Math.random() * 100) + 1)};
cart.push(item);
return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
var cartList = [];
if (cart.length === 0) {
  return `Your shopping cart is empty.`;
} else if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
} else if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.` 
} else {
  for (var i=0; i < cart.length; i++) {
    cartList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
  } var last = cartList.pop();
  return `In your cart, you have${cartList}, and${last}.`;
}
}

function getSum(total, num) {
    return total + num;
}

function total() {
  var cartTotal = [];
  if (cart.length === 0) {
    return `0`;
    } else {
      for (var i=0; i < cart.length; i++) {
    cartTotal.push(cart[i].itemPrice);
} return cartTotal.reduce(getSum);
}
}

function removeFromCart(item) {
  var itemFound = false;
  for (var i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      itemFound === true;
    }
  }
    if (itemFound === false) {
      return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
