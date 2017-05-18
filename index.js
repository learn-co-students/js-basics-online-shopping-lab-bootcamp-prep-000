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
function addToCart(purchaseItem){
  var price = Math.floor( Math.random() * 100);
  var objectNew = {[purchaseItem]: price};
  cart.push(objectNew);
  console.log( purchaseItem + " has been added to your cart.");
   return cart;
}

function viewCart(){
  var combo = "Your shopping cart is empty.";
  if( cart.length > 0){
    // [{socks: 93}, {puppy: 6}, {iPhone: 34}]
    combo = "In your cart, you have ";
    var array = []
    for(var i = 0; i < cart.length; i++){
      var cartKeys = Object.keys(cart[i])[0]; // 'socks'
      var price = cart[i][cartKeys];
      array.push(cartKeys + " at $" + price); // "In your cart, you have socks at $93, puppy at $6, iPhone at $34,"
    }
    console.log(combo+ array.join(', ') + '.');
  }
  else{
    console.log(combo);
  }
}
function removeFromCart(namez){;
var nonefound = true;
  for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(namez)){
        console.log(namez);
       cart.splice(i,1);
        nonefound = false;
      }
    }
if(nonefound){
  console.log("That item is not in your cart.");
}
  return cart;
}

function placeOrder(ccNumb){
  if(ccNumb === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
}
else{
  var total = 0;
  for(var i = 0; i < cart.length; i++){
      var cartKeys = Object.keys(cart[i])[0];
      total =+ cart[i][cartKeys];
  }
  cart = [];
  console.log("Your total cost is $" + total + ", which will be charged to the card " + ccNumb + ".");
}
}
