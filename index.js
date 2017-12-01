var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
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

  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    var itemName = Object.keys(cart[i])[0];
    if (1 < cart.length) {

      //console.log(Object.keys(cart[i])[0]);

      //console.log(object[itemName]);
      console.log(`In your cart, you have ${itemName} at $${object[itemName]}`);
    } else if (cart.length == 1) {
            console.log(`In your cart, you have ${itemName} at $${object[itemName]}.`);
       } else if(cart.length == 2) {
            console.log(`In your cart, you have ${itemName} at $${object[itemName]}.`);
       }
   }
   if (cart.length == 0) {
     console.log('Your shopping cart is empty.');
   }
}


function total() {
  // write your code here
}



function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
   }
   var totalPrice = total(); console.log('Your total cost is ${totalPrice}, which will be charged to the card $${cardNumber}.');
   cart = [];
    }

    addToCart('apples');
    addToCart('beer');
    viewCart();
