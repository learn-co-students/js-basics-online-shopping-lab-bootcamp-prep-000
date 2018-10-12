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

function viewCart() {
  // write your code here
  if (cart.length === 0) {
     var StringBase = `Your shopping cart is empty.`;
     return StringBase;
   }

  var stringBase = `In your cart, you have`;
  var stringTwo = ``;

  for (var i = 0; i < cart.length; i++){
    var purchase = cart[i];

      if (cart.length === 1) {
      stringTwo = `${purchase.itemName} at $${purchase.itemPrice}.`;
      }
     else if (cart.length > 1) {
       var stringThree = ``;
       if (i < cart.length - 1){
         stringThree = `,`;
         stringTwo = `${purchase.itemName} at $${purchase.itemPrice}${stringThree}`;
       }
       else {
         stringThree = `.`;
       stringTwo = `and ${purchase.itemName} at $${purchase.itemPrice}${stringThree}`;
       }

     }
     stringBase = `${stringBase} ${stringTwo}`;
  }
  return stringBase;
}
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
