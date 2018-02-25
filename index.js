var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  let itemName = item, itemPrice = Math.floor(Math.random()*100);
  console.log(`${item} has been added to your cart.`);
  cart.push({itemName, itemPrice})
  return cart;
}

function viewCart(){
  var msg = '';
  if(cart.length === 0){
    msg = 'Your shopping cart is empty.';
  } else if(cart.length === 1){
    msg = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if(cart.length === 2){
    msg = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    msg = `In your cart, you have `;
    for(var item in cart){
      if(cart[item] === cart[cart.length-1]){
        msg += `and ${cart[item].itemName} at $${cart[item].itemPrice}.`
      } else {
      msg += `${cart[item].itemName} at ${cart[item].itemPrice}, `;
      }
    }
  }
  console.log(msg);
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][1]
    }
  }

  return t
}

function removeFromCart(dis){
  for(var i in cart){
    if(cart[i].hasOwnProperty(dis)) {
      delete cart[i];
    } else {
      console.log('That item is not in your cart.')
    }
    return cart;
  }
}

function placeOrder(card){
  if(card == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  }
  return cart = [];
}
