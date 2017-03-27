var cart={};

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item) {
  var price=Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  else {
    var msg="In your cart, you have ";
    for(var i=0;i<cart.length;i++){
      for (var prop in cart[i]) {
        msg+=`${prop} at $${cart[i][prop]}`;
      }

      if(i!=(cart.length-1)){
        msg+=", ";
      }
    }
    msg+=".";
    console.log(msg);
  }
}
function removeFromCart(item){
  for(var i=0;i<cart.length;i++){
    for (var prop in cart[i]) {
      if(item===prop){
        cart.splice(i,1);
        return cart;
      }
    }

  }
   console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {

 if(!cardNumber){
   return console.log("We don't have a credit card on file for you to place your order.");

 }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.length=0;

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
