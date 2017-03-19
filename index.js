var cart = []
// SET CART //
function setCart(newCart) {
  cart = newCart;
}
// GET CART
function getCart(){
  return cart;
}
// ADD TO CART //
function addToCart(item){
  var price = Math.floor((Math.random()*100));
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
// REMOVE FROM CART //
function removeFromCart(removeItem){
  for(var i = 0; i < cart.length;i++){
      var hasitem = false
      if(cart[i].hasOwnProperty(removeItem)){
        cart.splice(i,1);
        hasitem = true;}



  }if (!hasitem){
    console.log('That item is not in your cart.');}
    return cart;
}

// VIEW CART //
function viewCart(){
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  }
  var view = [];
  for(var i = 0; i < cart.length; i++){
  for(var item in cart[i]){
      view.push(`${item} at $${cart[i][item]}`);
      }

   }console.log('In your cart, you have ' + `${view.join(', ')}.` );
}
// TOTAL
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
// PLACE ORDER
function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log("Your total cost is $" + `${total()}` + ", which will be charged to the card " + `${cardNumber}` + ".");
    cart = [];
  }
}
