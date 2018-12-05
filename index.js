var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObj = {'itemName': item, 'itemPrice': getRandomInt(2, 100)};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

console.log(cart);




function viewCart() {
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  for(var i = 0; i < cart.length; i++) {
    if(cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else if(cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    } else if(cart.length >= 3) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
    }
  }
}





function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}



function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}


function placeOrder(cardNumber) {
  if(cardNumber) {
    let totalCost = total();
    cart =[];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}

