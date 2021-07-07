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
 cart.push(item = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*101)
 });
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length > 0) {
    var cartList = [];
    for(var i=0; i<cart.length; i++) {
      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if(cartList.length > 1) {
      cartList[cartList.length-1] = "and "+ cartList[cartList.length-1];
    }
    return `In your cart, you have ${cartList.join(', ')}.`;
  }else{
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i=0; i<cart.length; i++) {
    totalPrice += parseInt(cart[i].itemPrice);
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var startingVal = cart.length;
  for(var i=0; i<cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1);
    }
  }
  if(cart.length === startingVal) {
    return "That item is not in your cart.";
  }else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    const message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return message;
  }else{
    return "Sorry, we don't have a credit card on file for you.";
  }
}
