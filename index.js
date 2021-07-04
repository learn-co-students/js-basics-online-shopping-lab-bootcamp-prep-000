var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var end = 'In your cart, you have ';
  for (var i = 0; i <= cart.length; i++) {
    if (cart.length === 1) {
      end = end.concat(`${cart[0].itemName} at $${cart[0].itemPrice}.`);
      return end;
    } else if (cart.length >= 2) {
      if (i < cart.length-1) {
        end = end.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      } else if (i === cart.length-1) {
        end = end.concat(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      }
    } else if (cart.length === 0) {
      end = 'Your shopping cart is empty.';
    }
  }
  return end;
}

function total() {
  var result = 0;
  for (var i = 0; i < cart.length; i++) {
    result = result + cart[i].itemPrice;
  }
  return result;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var finalTotal = total();
    for (var i = 0; i < cart.length; i++) {
      cart.pop();
    }
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
    
  }
}