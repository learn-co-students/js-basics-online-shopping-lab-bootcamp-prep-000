var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(item) {
    var cartItem = {};
    cartItem[item] = Math.floor(Math.random()*100)
    cart.push(cartItem);
    //cart.push({item:Math.floor(Math.random())});
    console.log(`${item} has been added to your cart.`);
    console.log('cart '+cart);
    return cart
}

function viewCart() {
  if(cart.length>0){
    var cartStr = 'In your cart, you have';
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        console.log(cart[i][key]);
        if (cart[i].hasOwnProperty(key)) {
          console.log("if prop");
          if(i == cart.length-1){
              cartStr = cartStr + ` ${key} at $${cart[i][key]}.`;
          }else{
            cartStr = cartStr + ` ${key} at $${cart[i][key]},`;
          }
        }
      }
    }
    console.log(cartStr);
    return cartStr
  }else{
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    // if(cart[i][item] == 'undefined'){
    //   console.log("***************");
    //
    // }
    for (var key in cart[i]) {
        if (cart[i].hasOwnProperty(key) && key == item) {
          delete cart[i][key];
          //if(cart.length == 0){
            cart = [];
            // return cart
          //}
        }
      }
    }
  if(cart.length == 0){
    console.log('That item is not in your cart.')
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var tot = total();
    console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`);
  }else{
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  return cart = [];
}
