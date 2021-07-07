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
 var cartItem = {
<<<<<<< HEAD
   itemName: item,
=======
   itemName: [item],
>>>>>>> 6fca23aef88f2c1a98d096652bbf75a9e76a870a
   itemPrice: Math.floor(Math.random()*100)
 };
 cart.push(cartItem);
  return `${cartItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartString = "";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    cartString = `${cart[0].itemName} at $${cart[0].itemPrice}`;
    let i = 1;
    while (i<cart.length-1) {
      cartString += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      i++;
    }
    if (cart.length > 1) {
      cartString += `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`;
    }
    return `In your cart, you have ${cartString}.`;
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i<cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
