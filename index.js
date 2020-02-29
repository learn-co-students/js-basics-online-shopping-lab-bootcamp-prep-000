var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemObj = {
   'itemName': item,
   'itemPrice': Math.floor(Math.random() * 100)
 }
 cart.push(itemObj);
 return `${itemObj.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
      let str = "In your cart, you have ";

    for(let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        str += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else if (i === cart.length - 2) {
        str += `${cart[i].itemName} at $${cart[i].itemPrice} and `;
      }else {
        str += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
      return str;

  }
}

function total() {
  let cost = 0;
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].itemPrice;
  }
  return cost;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  let total = 0;
  while(cart.length > 0) {
    total += cart[0].itemPrice;
    cart.shift();
  }
  return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
}
