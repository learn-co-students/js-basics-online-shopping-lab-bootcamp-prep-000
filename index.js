var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  let itemPrice = Math.floor(Math.random()*100);
  console.log(`${item} has been added to your cart.`);
  var add = {[item]: itemPrice}
  cart.push(add);
  return cart;
}

function viewCart(){
  var msg = '';
  if(cart.length === 0){
    msg = 'Your shopping cart is empty.';
  } else if(cart.length === 1){
    msg = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`;
  } else if(cart.length === 2){
    msg = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`;
  } else {
    msg = `In your cart, you have `;
    for(var item in cart){
      if(cart[item] === cart[cart.length-1]){
        msg += `${Object.keys(cart[item])} at $${Object.values(cart[item])}.`;
      } else {
      msg += `${Object.keys(cart[item])} at $${Object.values(cart[item])}, `;
      }
    }
  }
  console.log(msg);
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += parseInt(Object.values(cart[i]));
    }
  }

  return t
}

function removeFromCart(dis){
  var inCart = false;
  for(var i=0; i <cart.length; i++){
    if(cart[i].hasOwnProperty(dis)) {
      cart.splice(i, 1);
      inCart = true
    }
  }
  if(inCart === true){
    console.log(cart);
    return cart;
  } else {
    console.log('That item is not in your cart.');
    return cart;
  }
}

function placeOrder(card){
  if(card === undefined || card.isNaN) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  }
  cart = [];
}
