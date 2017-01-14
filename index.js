var cart = [];

function getCart (){
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1);
    cart.push(new Object({[item]:price}))
      console.log(`${item} has been added to your cart.`)
        return cart
}

function viewCart () {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
    var inCart = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++ ) {
        for(var itemsPrice in cart[i]) {
          inCart += `${itemsPrice} at $${cart[i][itemsPrice]}`;
          if(i === cart.length-1){
            inCart += '.'
          }
          else {
            inCart +=', '
          }
        }
      }

  console.log(inCart);
}

function removeFromCart(items){
  var socks = false;

for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(items)) {
      socks = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
}
  if (!socks){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log ("We don't have a credit card on file for you to place your order.");
}
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");

  cart = [];

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
