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
 var price = Math.floor(Math.random() * 100 + 1);
 cart.push({"itemName": item, "itemPrice": price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var temp = "";

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  for(var i = 0; i < cart.length; i++) {
    if(i === 0) {
      temp = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else if (i === cart.length - 1) {
      temp = temp + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
    } else {
      temp = temp + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
  }
  return temp + "."
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var num = total();
    cart = [];
    return `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`
  }
}
