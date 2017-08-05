var cart = [];
var cartContents = {};

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
  return cart
}

var min = 0;
var max = 100;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item){
  var price = getRandomIntInclusive(0, 100);
  cartContents = {[item]: price}
  cart[cart.length] = cartContents;
  console.log(`${cart[cart.length - 1]["item"]} has been added to your cart.`);

  return cart;
}


function removeFromCart( item ) {
  for(var i = 0; i < cart.length; i++) {
    if( cart[i].hasOwnProperty(item) ) {
     cart.splice(i, 1);
     return cart
    } else {
        console.log( "That item is not in your cart.");
    }
  }
}