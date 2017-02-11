// car is set to an empty array
var cart = [];
//new cart is an array
function setCart(newCart) {
  cart = newCart;
}
//function getCart returns cart
function getCart(){
  return cart
}
//function addToCart - 1 arg item
function addToCart(item) {
     var price = Math.random() * 100;
    price = Math.floor(price);
   var items = {[item]: price}
   cart.push(items);
   console.log(`${item} has been added to your cart.`);

    return cart;
  }

//function viewCart - no arguments
function viewCart() {
      if (cart.length === 0) {
      console.log("Your shopping cart is empty.")
    } else {
      var list = [];
      for (var i = 0, l = cart.length; i < l; i++) {
      var item = Object.keys(cart[i]);
     list.push(` ${item} at $${cart[i][item]}`);
      }
       console.log(`In your cart, you have${list}.`);
      }
    }

//Removing and item from the cart
function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i]);
    if (name === itemName) {
      cart = cart.slice(0,i);
      return cart;
  } else {
    console.log("That item is not in your cart.")
  }
}
}
function removeFromCart(item) {
    var myCart = getCart();
    var l = myCart.length;
    if(l !== 0){
     for (var i = 0; i <l ; i++) {
         if (myCart[i].hasOwnProperty([item])) {
             myCart.splice(i, 1);
            return myCart;
        } else {
            console.log("That item is not in your cart.")
                 }
        }
    }else{
      console.log("That item is not in your cart.")
    }
 }

 function placeOrder(cardNumber) {
  if(!cardNumber) {
   console.log("We don't have a credit card on file for you to place your order.")
  
  } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
    return cart
  }}
 
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
