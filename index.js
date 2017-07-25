var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100+1);
  var itemName = item;
  var obj = {[itemName]:itemPrice};
  cart = [...cart, obj];
  console.log(itemName+" has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length == 0){
    console.log( "Your shopping cart is empty.");
  }
  else if (cart.length == 1){
    console.log( "In your cart, you have "+ Object.keys(cart[0])[0]+ " at $"+cart[0][Object.keys(cart[0])[0]]+".")
  }
  else if (cart.length == 2){
    var cart1 = [];
    for (var i = 0; i<cart.length-1; i++){
      cart1.push(Object.keys(cart[i])[0]+ " at $"+cart[i][Object.keys(cart[i])[0]]);
    }
    console.log( "In your cart, you have "+ cart1.join(', ')+" and "+Object.keys(cart[cart.length-1])[0]+ " at $"+cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]+".")
  }
  else {
    var cart1 = [];
    for (var i = 0; i<cart.length-1; i++){
      cart1.push(Object.keys(cart[i])[0]+ " at $"+cart[i][Object.keys(cart[i])[0]]);
    }
    console.log( "In your cart, you have "+ cart1.join(', ')+", and "+Object.keys(cart[cart.length-1])[0]+ " at $"+cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]+".")
  }
}

function total() {
  var tv = 0;
  for (var j=0; j<cart.length; j++){
    tv += cart[j][Object.keys(cart[j])[0]];
  }
  return tv;
}

function removeFromCart(item) {
  var match = false;
  for (var i = 0; i<cart.length; i++){
    if (Object.keys(cart[i])[0] == item){
      cart.splice(i,1);
      match = true;
      return cart;
    }
  }
  if (match == false){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(ccn){
  if (ccn == null){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log("Your total cost is $"+total()+", which will be charged to the card "+ccn+".")
    return cart = [];
  }
}
