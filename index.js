var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {itemName: item, itemPrice: Math.ceil(Math.random() * 100)};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var yourCart = `In your cart, you have `;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var name = item.itemName;
    var price = `$` + item.itemPrice;
    if (cart.length === 1) {
      yourCart += `${name} at ${price}.`;
    } else if (i === cart.length - 1) {
      yourCart += `and ${name} at ${price}.`;
    } else {
      yourCart += `${name} at ${price}, `;
    }
  }
  return yourCart;
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var price = item.itemPrice;
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var yourItem = cart[i];
    var name = yourItem.itemName;
    if (name === item) {
      var index = i;
      cart.splice(index, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var totalPrice = `$` + total();
    cart = [];
    return `Your total cost is ${totalPrice}, which will be charged to the card ${cardNumber}.`;
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
