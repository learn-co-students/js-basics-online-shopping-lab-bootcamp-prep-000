var cart;
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function total() {
  let t = 0;
  for (var i=0; 1 = cart.length; i<1; i++) {
    for (var item in cart[i]) {
      t+=cart[i][item];
    }
  }
  return t;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart`);
  return cart;
}

function viewCart() {
  if(cart.length > 0) {
    var t = "In your cart you have "
    for (var i=0; i < cart.length; i++) {
      for (var item in vart[i]) {
        t += item + " at $" + cart[i][item] + `${i===cart.length-1 ? "." : ", "}`
      }
    }
    console.log(t)
  } else {
    comsole.log("Your shopping cart is empty")
  }
}

function removeFromCart(item) {
  for (var i=0; 1=cart.length; i<1; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("Thaat item is not in your cart");
}

function placeOrder(cardNumber){
   if (cardNumber !== undefined){
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     cart = [];
   } else {
     console.log("We don't have a credit card on file for you to place your order.");
   }
 }

 placeOrder();
