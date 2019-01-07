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
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  }
  var keys = Object.keys(cart);
  var line = "In your cart, you have";
  var strings = [];
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    var itemName = Object.keys(cart[i])[0];

    //strings.push(cart[i]);
    //console.log(itemName);
    strings.push(`${itemName} at $${object[itemName]}`);
     //Object.keys[item][0]
     //console.log(cart[i][itemName]);
   }
   //console.log(strings.join(", "));
   //console.log(`In your cart, you have ${strings.join(", ")}`);
   if(cart.length == 1) {

      console.log(`${line} ${itemName} at $${object[itemName]}.`);
   }
   if(cart.length == 2) {
      console.log(`In your cart, you have ${strings.join(" and ")}.`);
   }
   if(cart.length >= 3) {

        //console.log(`${strings[1]}`);
        console.log(`In your cart, you have ${strings[0]}, ${strings[1]}, and ${strings[2]}.`);
        console.log(`In your cart, you have ${strings[0]}, ${strings[1]}, ${strings[2]}, and ${strings[3]}.`);
      //console.log(`In your cart, you have ${strings.join(", and ")}.`);
      //console.log(strings[1]);
   }
}

    addToCart('apples');
    addToCart('beer');
    addToCart('shrimp');
    addToCart('crim');
    viewCart();
