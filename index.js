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
 var price = Math.ceil(Math.random()* 100);
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var text = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      var name = cart[i].itemName;
      var price = cart[i].itemPrice
      if (i!==0) {
        text += `, `
      }
      if (i + 1 === cart.length && i > 0) {
        text += "and "
      }
      text += `${name} at $${price}`
    }
    return text + "."
  }
}

function total() {
  // write your code here
  return cart.reduce((s, {itemPrice}) => s + itemPrice, 0);
}

function removeFromCart(item) {
  // write your code here
  if (cart.findIndex(({itemName}) => itemName === item) === -1) {
    return "That item is not in your cart."
  } else {
    cart = cart.filter(({itemName}) => itemName !== item);
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you.";
  } else {
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
