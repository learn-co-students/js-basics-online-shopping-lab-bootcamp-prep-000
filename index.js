var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var info = {};
 info['itemName'] = item;
 info['itemPrice'] = Math.floor(Math.random() * 100);
 cart.push(info);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length > 0) {
    var answer = 'In your cart, you have ';
    if(cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    for(let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        answer = answer + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        answer = answer + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return answer;
  } else return 'Your shopping cart is empty.';
}

function total() {
  // write your code here
  if (cart.length > 0) {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice;
    }
    return total;
  } else return 0;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
