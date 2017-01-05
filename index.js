var cart = [];


function getCart() {
  return cart;
}
/*function addToCart(item) {
  var price = Math.floor(Math.random()*100+1);
  var pair = {item: price};
  cart.push(pair);
  console.log(`${item} has been added to your cart.`);
  return cart;
} */
function addToCart(item) {
  var price = Math.floor(Math.random()*100+1);
  var pair = {[item]: price};
  cart.push(pair);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var myCart = [];
  if(cart.length>0){
    for(var i=0, l=cart.length; i < l; i++) {
      for (var item in cart[i]) {
        myCart[i] = ` ${item} at $${cart[i][item]}`;
        }
     }
      console.log(`In your cart, you have${myCart}.`)
  } else{
      console.log(`Your shopping cart is empty.`);
  }
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

/*function removeFromCart(item) {
  for(var i=0, l=cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if(cart.hasOwnProperty(item)){
          delete cart[i].item;
          return cart;
        } else {
          console.log(`That item is not in your cart.`);
        }
     }
   }
}*/

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber !== undefined){
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.length=0;
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
}
