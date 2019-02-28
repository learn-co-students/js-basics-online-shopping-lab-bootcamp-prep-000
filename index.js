var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//write your code here
var price = Math.floor(Math.random() * 100) + 1;
var obj = {};
obj.itemName = item;
obj.itemPrice = price;
cart.push(obj);
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var str = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      str +=`${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return str + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i ++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }

  if (item != cart[item]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var msg = "";
  if (!cardNumber){
    msg = "Sorry, we don't have a credit card on file for you."
  } else {
    msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
  }
  return msg;
}
