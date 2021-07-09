var cart = [];

function getCart() {
  return cart;
}


function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
 // write your code here
 var obj = {};

 obj.itemName = item;
 obj.itemPrice = Math.floor(Math.random() * 100 + 1);

 cart.push(obj);
 return `${obj.itemName} has been added to your cart.`

}

//better way for function viewCart()


function viewCart() {
  // write your code here
   if (cart.length === 0) {
      return `Your shopping cart is empty.`;
   }

   var stringBase = `In your cart, you have`;
   var cartItems = [];

   for (var i = 0; i < cart.length; i++) {
     var purchase = cart[i];
     cartItems.push(`${purchase.itemName} at $${purchase.itemPrice}`);
   }
   // isolate the lastItem from all the other items
  var lastItem = cartItems.slice(-1);
  var itemsOther = cartItems.slice(0, -1);

  //join all the other items in array with commas inbetween
  var itemsBase = itemsOther.join(", ");

  if (cartItems.length === 1) {
  //just use the last item and add period
  //onlyBase = `${lastItem}.`;
  return `${stringBase} ${lastItem}.`;
  }

  if (cartItems.length > 1) {
  //put and in front of lastItem
  return `${stringBase} ${itemsBase}, and ${lastItem}.`;
  }
}
  viewCart();



//old way to solve
//function viewCart() {
  // write your code here
//   if (cart.length === 0) {
//      var StringBase = `Your shopping cart is empty.`;
//      return StringBase;
//    }
// <<<<<<< HEAD
// =======
//
//   var stringBase = `In your cart, you have`;
//   var stringTwo = ``;
//
//   for (var i = 0; i < cart.length; i++){
//     var purchase = cart[i];
//
//       if (cart.length === 1) {
//       stringTwo = `${purchase.itemName} at $${purchase.itemPrice}.`;
//       }
//      else if (cart.length > 1) {
//        var stringThree = ``;
//        if (i < cart.length - 1){
//          stringThree = `,`;
//          stringTwo = `${purchase.itemName} at $${purchase.itemPrice}${stringThree}`;
//        }
//        else {
//          stringThree = `.`;
//        stringTwo = `and ${purchase.itemName} at $${purchase.itemPrice}${stringThree}`;
//        }
//
//      }
//      stringBase = `${stringBase} ${stringTwo}`;
//   }
//   return stringBase;
// }
// >>>>>>> 7fbc5daabd2c6bcc1063f7a2b077b05da5176642


function total() {
  // write your code here
var sum = 0;
for (var i = 0; i < cart.length; i++) {
  var purchase = cart[i];
  sum += purchase.itemPrice;
}
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  for (var i = 0; i < cart.length; i++){
    var purchase = cart[i];
      if (purchase.itemName === item) {
        found = true;
        cart.splice(i, 1);
        return cart;
      }
  }
    return `That item is not in your cart.`;
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
var charge = total();
  cart.splice(0, cart.length);
  return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`

}
