var cart;
var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart() {
  return cart
}
function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  cart.push({[item]: price})
  console.log('${item} has been added to your cart.')
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var itemsAndPrices = []
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        itemsAndPrices.push(item + ' at $ '+cart[i][item])
      }
    }
    console.log('In your cart, you have' + itemsAndPrices.join (", ") + ".");
  }
}
function removeFromCart(item) {
   var i_found_it = false;
   for(var i = 0; i < cart.length; i++) {
     if(cart[i].hasOwnProperty(item)) {
       i_found_it = true;
       cart.splice(i, 1)
     }
   }
   if(!i_found_it) {
         console.log('That item is not in your cart.')
 }
 return cart
   }
function placeOrder(cardNumber) {
  var emptyArray = [];
  if (cardNumber === undefined){
return console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log('Your total cost is $${total()}, which will be charged to the card ${cardNumber}.')

  }
return cart = [];
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
