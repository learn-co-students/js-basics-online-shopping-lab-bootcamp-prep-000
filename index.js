var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {}
  itemObject['itemName'] = item;
  itemObject['itemPrice'] = Math.floor(Math.random() *100);
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var cartList = 'In your cart, you have ';
    if (cart.length === 1) {
      var item = cart[0];
      return cartList + `${item['itemName']} at $${item['itemPrice']}.`;
    } else {
      for (var i = 0; i < cart.length - 1; i++) {
        item = cart[i];
        cartList = cartList + `${item['itemName']} at $${item['itemPrice']}, `;
      }
      var lastItem = cart[cart.length - 1];
      cartList = cartList + `and ${lastItem['itemName']} at $${lastItem['itemPrice']}.`;
      return cartList;
    }
  }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    totalValue = totalValue + item['itemPrice'];
  }
  return totalValue;
}

function removeFromCart(item) {
  var remove = false;
  for (var i = 0; i < cart.length; i ++) {
    var cartItem = cart[i];
    if (cartItem.itemName === item) {
      cart.splice(i, 1);
      remove = true;
    }
  }
  if (remove === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart =[];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
