var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newitem = {[item]:Math.floor(Math.random()*100)};
 cart.push(newitem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else{
    var items = [];
    var prices = [];
    for(var i=0; i<cart.length; i++){
      items.push(`${Object.keys(cart[i])}`);
      prices.push(`${Object.values(cart[i])}`);
    }
    var out = [];
    for(var i=0; i<cart.length; i++){
      if(i<cart.length-1 || cart.length===1){
        out.push(` ${items[i]} at $${prices[i]}`);
      }
      else{
        out.push(` and ${items[i]} at $${prices[i]}`);
      }
    }
    if (cart.length === 2){
      console.log(`In your cart, you have${out.join("")}.`);
    }
    else{
    console.log(`In your cart, you have${out}.`);
    }
  }
}

function total() {
  var sumTotal = 0;
  for(var i=0; i<cart.length; i++){
    var nextPrice = Object.values(cart[i]);
    var sumTotal = +sumTotal + +nextPrice;
  }
  return sumTotal;
}

function removeFromCart(item) {
  var length = cart.length
  for(var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1)
    console.log(`${cart}`)
    }
  }
  if(length === cart.length){
    console.log("That item is not in your cart.")
    console.log(`${cart}`)
  }
}

function placeOrder(cardNumber) {
  if(typeof cardNumber === "undefined"){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
