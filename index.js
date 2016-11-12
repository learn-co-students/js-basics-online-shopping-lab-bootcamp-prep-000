var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random()*100)+1);
  var obj = {[item]: price}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if(cart.length > 0) {
    var string = `In your cart, you have `;
    for(var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      var cost = cart[i][item];
      string += `${item} at $${cost}${i===cart.length-1 ? "." : ", "}`
    }
    console.log(string);
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    var test = Object.keys(cart[i]);
    if(test==item){
      cart.splice(i,1);
      return;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(creditCard) {
  if(creditCard == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = new Array();
  }
}
