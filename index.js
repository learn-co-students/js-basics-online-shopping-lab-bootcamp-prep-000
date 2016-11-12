var cart = [];

function getCart () {
  return cart;
}



function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart () {
  var itemPrice = [];
  if (cart.length > 0) {
    for(var i = 0; i < cart.length; i ++) {
      var pair = cart[i];
      var cartItem = Object.keys(pair)
      itemPrice.push (`${cartItem} at $${pair[cartItem]}`)
      var string = itemPrice.join(', ');
}
      console.log(`In your cart, you have ${string}.`)
}else{
  console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name){
      for(var i = 0; i < cart.length; i++){
      var pair = cart[i];
      if (pair.hasOwnProperty(name)){
      cart.splice(i, 1);
      return cart;
}
}
      if (cart.hasOwnProperty(name) === false){
    console.log("That item is not in your cart.")
    }
  }

function placeOrder(cardNumber){
    if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
} else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
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
