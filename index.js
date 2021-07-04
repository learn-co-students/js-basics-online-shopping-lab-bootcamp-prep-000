var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var price = Math.floor(Math.random() * 100);
   var cartObj = { [item]: price };
   cart.push(cartObj);
   console.log(`${item} has been added to your cart.`);
   return cart;
}
function viewCart() {
  var itemAndPrices = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }
 for (var i=0; i < cart.length; i++){
 var key = Object.keys(cart[i])[0];
 var price = cart[i][key];
    itemAndPrices.push(key+" at $"+price);
  }
     if(cart.length === 1){
    console.log(`In your cart, you have ${itemAndPrices[0]}.`);
  } else if (cart.length === 2){
    console.log(`In your cart, you have ${itemAndPrices.join(' and ')}.`);
  } else {
    // 'and quince at $43' itemsAndPrices[3]
    itemAndPrices[cart.length - 1] = `and ${itemAndPrices[cart.length - 1]}`
    console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`);
  return cart
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

function removeFromCart(item) {
  for (var i = 0; i<cart.length; i++) {
    var itemInCart = Object.keys(cart[i])[0]
    if(item == itemInCart) {
      cart.splice(i, 1)
      return cart
    }
  }
console.log('That item is not in your cart.')
 }

 function placeOrder(cardNumber) {
   if (cardNumber == undefined) {
     console.log("Sorry, we don't have a credit card on file for you.")
   } else {
     var totalPrice = total();
     console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
     cart = []
     return cart
   }
 }
