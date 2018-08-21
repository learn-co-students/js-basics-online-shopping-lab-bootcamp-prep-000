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
  for (let i=0; i<cart.length; i++) {
    if (cart.length === 0) {
      return "Your shopping cart is empty.";
    } else if (cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    } else {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
    }
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
      cart.splice(cart[i], 1);
    } else {
      return "That item is not in your cart."; 
    }
  }
}

function placeOrder(creditCard) {
  if (creditCard) {
    return `Your total cost is $${total()}, which will be charged to the card ${creditCard}.`; 
  } for (let i=cart.length; cart.length >= 0; i--) {
    cart.pop();
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}

function placeOrder(creditCard) {
  if (!creditCard) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${creditCard}.`;
  }
  let cart = [];
}
