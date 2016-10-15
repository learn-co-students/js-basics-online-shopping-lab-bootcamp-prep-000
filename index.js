var cart = new Array();

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

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart = Object.assign({}, cart, {[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart (){
  var view = "In your cart you have";
  if(cart.length > 0){
    for(var item in cart){
      view += ` ${item} ${cart[item]}`;
    }
    view += "."
  }
  else {
    view = "Your shopping cart is empty.";
  }
}

function removeFromCart(item){
  if(cart.hasOwnProperty(item)){
    delete cart[item];
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(ccNum){
  if(ccNum === null){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
  }
}
