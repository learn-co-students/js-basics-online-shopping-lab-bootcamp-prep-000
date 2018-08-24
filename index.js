var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor((Math.random() * 100) + 1);
  let cartObject = {itemName:item, itemPrice:price};
  cart.push(cartObject);
  return `${cartObject.itemName} has been added to your cart.`;
}

function viewCart() {
  let cartItems = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
     for (let i=0; i<cart.length-1; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}

function total() {
  let totalPrice = 0;
  let priceArray = [];
  for (let i=0; i<cart.length; i++) {
    priceArray.push(cart[i].itemPrice);
  }
  for (let j=0; j<priceArray.length; j++) {
    totalPrice += priceArray[j];
  } 
  return totalPrice;
}

function removeFromCart(item) {
  for (let i=0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
    } 
  } return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  let totalCost = total();
  if (cardNumber) {
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`; 
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}

