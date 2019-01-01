var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(object);
  return `${item} has been added to your cart.`;
}

function viewCart() {

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }

  if (cart.length >= 3) {
    let message = "In your cart, you have ";

    for (let i = 0; i < cart.length - 1; i ++) {
      message += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }

    message += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;

    return message;
  }
}

function total() {
  let cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  if (item) {

  }
}

function placeOrder(cardNumber) {

}
