var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemObject = {[itemName]: itemPrice};
  cart.push(itemObject);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
var cartStatement = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
   }
   else {
     for (let i = 0; i < cart.length; i++) {
       var myItems = Object.keys(cart[i]);
       var itemsPrices = cart[i][myItems];
       var itemsAndPrices = ' ' + myItems + ' at $' + itemsPrices;
       cartStatement.push(itemsAndPrices);
     }
     if (cartStatement.length === 1) {
       console.log('In your cart, you have' + cartStatement + '.');
     }
     else if (cartStatement.length == 2) {
       itemsAndPrices = cartStatement.join(' and');
       console.log(`In your cart, you have${itemsAndPrices}.`);
     }
     else {
       cartStatement[cartStatement.length - 1] = ' and'.concat(
         cartStatement[cartStatement.length - 1]);
       var cartStatementUpdated = cartStatement.join(',');
       console.log('In your cart, you have' + cartStatementUpdated + '.');
     }
  }
}

function total() {
  var total = 0;
     for (let i = 0; i < cart.length; i++) {
         var myItems = Object.keys(cart[i]);
         var itemsPrices = cart[i][myItems];
           total = total + cart[i][myItems];
         }
         return total;
       }


function removeFromCart(item) {
  {let itemInCart = false;
       for (let i = 0; i < cart.length; i++) {
         if (cart[i].hasOwnProperty(item)){
             itemInCart = true;
             cart.splice(i,1);
             }
           }
           if (itemInCart) {
           	console.log(cart);
           }
           else {
           	console.log('That item is not in your cart.');
           }}

function placeOrder(cardNumber) {
       if (cardNumber) {
         console.log('Your total cost is $' + total() +', which will be charged to the card ' + cardNumber+'.');
         cart = [];
       }
       else {
         console.log('Sorry, we don\'t have a credit card on file for you.');
     }
   }
}
