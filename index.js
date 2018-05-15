var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomPrice() {
  let int = Math.floor(Math.random() * 100);
  return int;
}

function addToCart(item) {
  let rand = randomPrice();
  let name = {itemName: item};
  let price = {itemPrice: rand};
  let expandedItem = Object.assign(name, price);
  cart.push(expandedItem);
return `${expandedItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let msg = "In your cart, you have ";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for (let i = 0; cart.length - i > 0; i++) {
      msg += `${cart[i].itemName} at $${cart[i].itemPrice}${cart.length - i > 2 ? `, ` : ``}${cart.length - i === 2 ? `, and ` : ``}${cart.length - i < 2 ? `.` : ``}`;
    }
    return msg;
  }
}

function total() {
  let priceIteration = 0;
  for (let i = 0; cart.length - i > 0; i++) {
    priceIteration += cart[i].itemPrice;
  }
  return priceIteration;
}


function removeFromCart(item) {
  let lengthSearch = cart.length - 1;
  while (lengthSearch > -1) {
    if (cart[lengthSearch].itemName === item) {
      cart.splice(lengthSearch, 1);
      return cart;
    } else {
      lengthSearch--;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    let finalTotal = total();
    cart = [];
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
