var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addToCart(item) {
  cart.push({"itemName": item, "itemPrice": getRandomInt(100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let returnString = 'In your cart, you have ';
  switch(cart.length) {
    case 0:
      return "Your shopping cart is empty.";
      break;
    case 1:
      for (let i = 0; i < cart.length; i++) {
        returnString += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      return returnString;
      break;
    default:
      for (let i = 0; i < cart.length -1; i++) {
        returnString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
      returnString += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
      return returnString;
  }
}
function total() {
  let price = 0;
  for (let i = cart.length -1; i >= 0; i--)  {
    price += cart[i].itemPrice
  }
  return price
}

function removeFromCart(item) {
  let inCart = false
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName)  {
      cart.splice(i, 1)
      return cart
    } else inCart = false;
  }
  if (inCart == false)  {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let priceToCharge = total();
    cart = []
    return `Your total cost is $${priceToCharge}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don\'t have a credit card on file for you."
  }
}
