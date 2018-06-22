var cart = [];

function getCart(item) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100+1)});
 console.log(cart);
 return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var result = 'In your cart, you have ';
    for (let i = 0; i < (cart.length-1); i++) {
      result += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    result += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    return result;
  }
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var result = cart.splice(i,1);
      return result;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}


