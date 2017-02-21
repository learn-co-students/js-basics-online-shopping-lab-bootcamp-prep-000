var cart = [];

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

function addToCart(item) {
  cart.push({[item]:Math.floor(Math.random()*100)});
  console.log(item+" has been added to your cart.");
  return cart;
}

function viewCart() {
  var stuff = "In your cart, you have";
  if(cart.length==0) {console.log("Your shopping cart is empty.");return ;}
  for(var i=0; i<cart.length; i++){
     stuff+=" "+Object.keys(cart[i])[0] +" at $"+ cart[i][Object.keys(cart[i])[0]]+","; //that's soo bad..
  }
  console.log( stuff.slice(0,-1)+".");
}

function getIndexInCart(item) {
  for(var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)) return i;
  }
  return -1;
}

function removeFromCart(item) {
  var pos = getIndexInCart(item);
  if(pos != -1){
    cart.splice(pos, 1);
  return cart;
  }
  else {
    console.log("That item is not in your cart.");
    return cart;
  } 
}


function placeOrder(card) {
  if(typeof(card) == 'undefined' || card=="") {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
  return cart;
}
