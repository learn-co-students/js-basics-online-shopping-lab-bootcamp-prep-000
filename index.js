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


function getCart(){ return cart;}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
var pairs = "";

if (cart.length === 0) {
  console.log(`Your shopping cart is empty.`)
}
else {
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]){
  pairs += ` ${item} at $${cart[i][item]},`
  }
}
 pairs=pairs.slice(0,-1)
  console.log(`In your cart, you have${pairs}.`)
}
}

function removeFromCart(name){
  var notInCart = true;
  for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(name)){
          cart.splice(i,1);
          notInCart = false;
          console.log(`${name} has been removed from the cart.`)
          return cart
      }
    }
    if (notInCart){
      console.log('That item is not in your cart.');

    }
}

function placeOrder(ccnum){
  if (ccnum === undefined){
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccnum}.`)
    cart = []
  }

  }
