var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = {'itemName': `${item}`, 'itemPrice': price};
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = [];
    if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
  for (let i = 0; i < cart.length; i++) {
  if (i===0) {
    message[i] = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (cart.length < 2) {
    message[i] = `${message[i]}.`;
    }
  }
  else if (i < cart.length-1) {
    message[i] = (`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  else if (i < cart.length) {
    message[i] = (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
  }
  }
}
return message.join(', ');
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  cart = getCart();
  var lim = cart.length;
  var count = 0;
  var have = 0;
  while (lim > 0) {
  var string = `${cart[count].itemName}`;
    if (string ===`${item}`) {
    cart = cart.slice(0,count).concat(cart.slice(count+1))
    count = count;
    lim -= 1;
    have = 1;
    }
    else {
      count += 1;
      lim -= 1;
    }
  }
      if (have === 0) {
      return 'That item is not in your cart.'
      }
}

function placeOrder(cardNumber) {
   var cart = getCart();
   var cost = total();
   cart = cart.splice(0,cart.length);
  if (arguments.length === 0) {
  return 'Sorry, we don\'t have a credit card on file for you.';
  }
    else {
      return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
    }
    return cart;
}
