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
function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*(100 - 0 + 1)+ 0);
    cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart(){
  var inTheCart = 'In your cart, you have '
  if(cart.length){
    for(var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0];
      if(i >= cart.length - 1){
        inTheCart += `${item} at $${cart[i][item]}.`;
      } else {
        inTheCart += `${item} at $${cart[i][item]}, `;
      }
    }
    console.log(inTheCart);
  } else {
    console.log('Your shopping cart is empty.')
  }
}


function removeFromCart(name){
  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    if(item === name){
      console.log("if statement")
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = [];
  }
}
