var cart;

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log( `${item} has been added to your cart.` );
  return cart;
}

function viewCart(){
  var common = "In your cart, you have";
  var output = "";
  if(cart.length > 0) {
   for (var i = 0, l = cart.length; i < l; i++) {
     if(i < l-1){
      for (var item in cart[i]) {
        output += (`${item} at $${cart[i][item]}, `);
      }
     } else {
       for (var item in cart[i]) {
        output += (`${item} at $${cart[i][item]}.`);
      }
     }
    }
   console.log(`${common} ${output}`);
 } else {
    console.log(`Your shopping cart is empty.`);
  }
}

function removeFromCart(item){
   if(cart.length > 0){
     for (var i = 0, l = cart.length; i < l; i++) {
       cart.pop();
      }
   } else {
     console.log(`That item is not in your cart.`);
   }
}

function placeOrder(cardNumber){
   if(cardNumber === undefined || cardNumber === null || cardNumber.length <= 0){
     console.log(`We don't have a credit card on file for you to place your order.`);
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   }
   for(var d=0; d< Object.keys(cart).length; d++){
     cart.pop();
   }
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
