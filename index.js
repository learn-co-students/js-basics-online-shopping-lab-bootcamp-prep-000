var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
    var price = Math.floor((Math.random()*100)+ 1);
    cart.push({item : `${price}`});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart(){
  if(cart.length>0){
    for (var i = 0;i < cart.length; i++){
      for (var e in cart[i]){
        console.log(`In your cart, you have ${e} at $${cart[i][e]}`);
      }
    }
  }
  else {
    console.log('Your shopping cart is empty.');
  }
}

// function removeFromCart(itemName){
//   for (var itemName in cart){
//     if (cart.hasOwnProperty(itemName)){
//       delete itemName;
//     } else {
//       console.log("That item is not in your cart.")
//     }
//   }
// }



function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
