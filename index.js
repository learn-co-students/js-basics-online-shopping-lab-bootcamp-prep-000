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
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.");
  return cart;
}

// example of cart: [{pizza: 24}, {socks: 6}, {iPad: 74}]

function viewCart() {
  if (cart > 0){
    for (var i=0;i<=cart.length;i++) {
      var key = Object.keys(cart[i])[0];
    }
    console.log("In your cart, you have" + key + "at $"+ cart[key]);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  var total = 0;
  for(var i=0; i<cart.length;i++){
    var key = Object.keys(cart[i])[0];
    total += cart[i][key];
  }
  return total;
}

function removeFromCart(item) {
  for (var item in cart){
    if (cart.hasOwnProperty(item)){
      cart.slice(item);
      return cart;
    } else {
      console.log("That item is not in your cart.");
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  if(Number.isInteger(cardNumber) === true){
    console.log("Your total cost is $"+ total() +" which will be charged to the card" + cardNumber +".");
    return cart=[];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
