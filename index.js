var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
   }
   var totalPrice = total();
   console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
   cart = [];
    }

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i];
    var objKey = Object.keys(obj)
    var value = obj[objKey]
    sum +=value;
  }
  return sum;
}

function addToCart(item) {
 // write your code here
 var obj = {[item]: Math.floor(Math.random()*100)}
 cart.push(obj);
 console.log([item] + " has been added to your cart.");
 return [obj];
}

function removeFromCart(item) {
   for (var i =0 ; i<cart.length; i++){
       if (cart[i].hasOwnProperty(item)){
       var removedItem = cart.splice(i, 1);
       return removedItem;
}

}if (true) {
  console.log('That item is not in your cart.');
  }
}












function viewCart() {
  // write your code here
  var keys = Object.keys(cart);
  var line = "In your cart, you have";

  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    var itemName = Object.keys(cart[i])[0];
    var strings = [];
    strings.push(cart[i]);


   }
   if (cart.length == 0) {
     console.log('Your shopping cart is empty.');
   }
   else if(cart.length == 1) {
           console.log(`${line} ${itemName} at $${object[itemName]}.`);
   } else if(cart.length == 2) {
           console.log(`${line} ${itemName} at $${object[itemName]}, and ${strings} at ${strings}.`);
   } else if(cart.length <= 3) {
              console.log(`${line} ${itemName} at $${object[itemName]}, and ${strings} at ${strings}.`);
   }

}
 //Object.keys[item][0]
  //cart[i][itemName];
    addToCart('apples');
    addToCart('beer');
    viewCart();
