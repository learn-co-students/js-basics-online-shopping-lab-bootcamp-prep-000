var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var content = 'In your cart, you have ';
  var len = cart.length;
  
  if (len > 0) {
    for (var i = 0; i < len; i++) {
      if (len === 1) {
        content += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
        return content;
      } else {
        content += `${i === len - 1 ? 'and ' : ''}${cart[i].itemName} at $${cart[i].itemPrice}${i === len - 1 ? '.' : ', '}`;
      }
    }
  } else {
    return 'Your shopping cart is empty.'
  }
  return content;
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var len = cart.length;
  for (var i = 0; i < len; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return str
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
