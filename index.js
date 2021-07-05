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
  var myObject = {'itemName': `${item}`, 'itemPrice': price};
  cart.push(myObject);
  return `${item} has been added to your cart.`;
}

  function viewCart() {
   var message = [];
    if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
  for (let i = 0; i < cart.length; i++) {
  if (i === 0) {
    message[i] = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (cart.length < 2) {
    message[i] = `${message[i]}.`;
    }
  }
  else if (i < cart.length-1) {
    message[i] = (`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  else if (i < cart.length) {
    message[i] = (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
  }
  }
}
return message.join(', ');
  }

function total() {
 var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice;
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
  if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cartTotal = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cartTotal;
  }
}