 var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj.itemName = item;
  obj.itemPrice = Math.floor(Math.random() * 100 + 1);
  cart.push(obj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if(cart.length > 0) {
    var list = [];
    for(var i = 0; i < cart.length; i++) {
      var name = cart[i].itemName;
      var price = cart[i].itemPrice;
      list.push(` ${name} at $${price}`);
    }
    if(list.length === 1) {
      return `In your cart, you have${list}.`
    } else {
      return `In your cart, you have${list.slice(0, list.length-1)}, and${list.slice(-1)}.`
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var price = cart[i].itemPrice;
    sum += price;
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart
    }
  } return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var totalArr = cart.splice(0);
    var total = 0;
    for(var i = 0; i < totalArr.length; i++) {
      total += totalArr[i].itemPrice;
    }
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
