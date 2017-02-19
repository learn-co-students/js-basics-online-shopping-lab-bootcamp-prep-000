var cart = [];
function getCart(){
  return cart;
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

  return t;
}

function addToCart(item){
  var itemPrice = Math.floor(Math.random)() * 100;
  cart.push({ [item] : price });
console.log ([item] + "has been added to your cart.");
  }

  function viewCart(){
    if (cart.lenth > 0){
      var list = [];
  for(var i = 0; i < cart.length; i++){
    var myItems = Object.keys(cart[i]);
    list.push(" " + myItems + " at $" + cart[i][myItems] );
  }
  console.log('In your cart, you have' + list + ".");
} else {
  console.log('Your shopping cart is empty.')
  }


function removeFromCart(item){
  for(var i = 0; i < item.length; i++){
    var itemInTheCart = Object.keys(cart[i]);
    if(cart[i].hasOwnProperty(item)){
      cart.splice(cart[i],1);
      return cart
    }
  }
    console.log("This item is not in your cart.")
}

function placeOrder(ccNumber){
  if(ccInfo) {
console.log(`Your total cost is $${total()}, which will be charged to the card ${ccInfo}.`);
  cart = [];
} else {
  console.log("We don't have a credit card on file for you to place your order.");
  }
}
