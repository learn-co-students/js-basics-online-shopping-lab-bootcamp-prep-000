var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() + 1);
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else{
    var items = [];
    for(var i = 0; i < cart.length; i++){
      for (var item in cart[i]){
        items.push(`${item} at $${cart[i][item]}`);
      }
    }
    console.log(`In your cart, you have ${items.join(', ')}.`);
  }
}

function total() {
  let total = 0;
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  var unwanted = false;
    for(item in cart){
      var i = cart.indexOf(item);
      if(cart.hasOwnProperty(item)){
        unwanted = true;
        cart.splice(i,1);
      }
    }
    if(!unwanted){
      console.log("That item is not in your cart.");
      return cart;
    }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
  return cart;
}
