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
 var price = Math.floor(Math.random() * 100);
 var obj = {itemName: item, itemPrice: price};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var message = 'In your cart, you have ';
  
  if (cart.length === 0) {
    message = "Your shopping cart is empty."
    return message
  }
  for (var i = 0; i < cart.length; i++) {
    var text = `${cart[i].itemName} at \$${cart[i].itemPrice}`;
    if (cart.length === 1) {
      message += `${text}.`
    } else if (i === cart.length - 1) {
      message += `and ${text}.`
    } else {
      message += `${text}, `;
    }
  }
  return message
}

function total() {
  // write your code here
  var tot = 0;
  for (var item of cart) {
    tot += item.itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  // write your code here
  var itemFound = 0;
  for (var elem of cart) {
    if (elem.itemName === item) {
      var pos = cart.indexOf(elem);
      cart.splice(pos,1);
      itemFound += 1;
    }
  }
  if (itemFound === 0) {
    return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(...cardNumber) {
  // write your code here
  if (cardNumber.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber[0]}.`;
  }
  
}
