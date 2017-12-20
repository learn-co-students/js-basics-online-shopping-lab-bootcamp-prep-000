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
  var itemAndPrices = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = Object.values(cart[i])[0];
      itemAndPrices.push(item + " at $ " + price);
    }
    if (cart.length < 0){
      itemAndPrice.push(item + "at $" + price);
      console.log(`In your cart, you have ${itemsAndPrices[0]}.`)
  } else {
      return cart = `${item} at ${price}`
    }
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
     console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
     return cart = []
   }
 }
