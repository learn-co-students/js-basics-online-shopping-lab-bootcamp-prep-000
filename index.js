var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemprice = Math.floor(Math.random() * 99)
  cart.push(new Object({[item]:itemprice}));
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){

  if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {

     var arrayOfItemsPrices = [];

     for (var obji in cart){
       var itemAndPrice = cart[obji];
       for (var key in itemAndPrice){
         arrayOfItemsPrices.push(key + " at $" + itemAndPrice[key])
       }
     }
     var objectkey = Object.keys(arrayOfItemsPrices);
     if (objectkey.length === 1) {
        console.log("In your cart, you have " + arrayOfItemsPrices + ".")
     } else if (objectkey.length === 2) {
       var twocartItems = arrayOfItemsPrices.join(" and ")
       console.log("In your cart, you have " + twocartItems + ".")
     } else {
     //var lastcartItem = arrayOfItemsPrices.pop() //slice(0, arrayOfItemsPrices-1);
     var cartItems = arrayOfItemsPrices.slice(0, arrayOfItemsPrices.length-1)
     var cartItems = cartItems.join(", ");
     //var oxfordcomma = cartItems + ", and" + arrayOfItemsPrices.pop();
     console.log("In your cart, you have " + cartItems + ", and " + arrayOfItemsPrices.pop() + ".")
   }
 }
}

/*
function viewCart() {
  //var cartstring = "In your cart, you have ";
  if (cart.length === 0) {
      console.log( "Your shopping cart is empty.")
  } else {
    var cartString = "In your cart, you have "

          for(var i = 0; i < cart.length; i++) {
             for(var prop in cart[i]){
               cartString += `${prop} at $${cart[i][prop]}`
               if(i !== cart.length-1) {
                   cartString += ", "
               }
             }
           }
      console.log(cartString + ".")
   }

 }
*/

function total() {
  // write your code here
  var totalprice = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var itemp in cart[i]) {
      totalprice += cart[i][itemp]
    }
  }
  return totalprice;
}

function removeFromCart(item) {
  // write your code here
  var placeholder = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      placeholder = i;
      cart.splice(i, 1)
    }
  }
  if (placeholder === 0) {
    console.log( "That item is not in your cart.")
  }

  return cart

}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
  var totalprice = total();
  console.log(`Your total cost is $${totalprice}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
}
