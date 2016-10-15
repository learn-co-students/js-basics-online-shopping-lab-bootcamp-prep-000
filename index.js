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
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart (){
  var view = "In your cart, you have";
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      for(var itemName in cart[i]){
      view += ` ${itemName} at $${cart[i][itemName]},`;
    }
  }
    view = `${view.substring(0, view.length - 1)}.`;
  }
  else {
    view = "Your shopping cart is empty.";
  }
  console.log(view);
}

function removeFromCart(item){
  var found = false;
  var location = 0;
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
     found = true;
     location = i;
    }
  }

  if(found){
    cart.splice(location,1);
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(ccNum){
  if(ccNum === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
    cart = [];
  }
}
