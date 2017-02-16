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
// New code starts
function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var itemAndPrice = {[item]: price};
  cart.push(itemAndPrice);
  console.log(item+' has been added to your cart.')
  return cart
}

function viewCart() {
  if ( cart.length > 0 ) {
    var list = [];
    for(var i = 0; i < cart.length; i++) {
      var myItems = Object.keys(cart[i]);
      list.push( " " + myItems + " at $" + cart[i][myItems] );
    }
    console.log('In your cart, you have' + list + ".");
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    var itemsInCart = Object.keys(cart[i]);
    if(cart[i].hasOwnProperty(item)){
      cart.splice(cart[i], 1);
      return cart
  }
}
console.log("That item is not in your cart.");
}

function placeOrder(ccInfo) {
    if (ccInfo){
        console.log(`Your total cost is $${total()}, which will be charged to the card ${ccInfo}.`);
        cart = [];
    } else {
        console.log("We don't have a credit card on file for you to place your order.");
    }
}
