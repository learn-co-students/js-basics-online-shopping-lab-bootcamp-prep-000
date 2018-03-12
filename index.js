var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    if (cart.length === 1) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
      }
    else {
      var items = "";
      for (var i = 0; i < cart.length - 1; i++) {
        items += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
        if(i < cart.length-2) {
          items += `, `;
        }
      }
      items += ` and ${getCart()[cart.length - 1].itemName} at $${getCart()[cart.length - 1].itemPrice}`;
      return `In your cart, you have ${items}.`;
    }
  }
}

function total() {
  var sum = 0;
  for (var x = 0; x < cart.length; x++) {
    sum += cart[x].itemPrice;
  }
  return sum;
}

function removeFromCart(remove) {
  for (var i = 0; i < cart.length; i++) {
    if(remove === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  else {
    var sum = total(cart);
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
