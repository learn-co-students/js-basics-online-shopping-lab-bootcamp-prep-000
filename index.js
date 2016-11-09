var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if ( cart.length < 1 ){
    console.log('Your shopping cart is empty.');
  }
  else {
    var message = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      if (i > 0 ){
        message += ', ';
      }
      for (var item in cart[i]){
        message += item + ' at $' + cart[i][item];
      }
      if ( i === (cart.length - 1)){
        message += '.';
      }
    }
    console.log(message);

}
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
        return cart.splice(i, 1);
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cc){
  if (cc === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    return setCart([]);
  }
}

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
