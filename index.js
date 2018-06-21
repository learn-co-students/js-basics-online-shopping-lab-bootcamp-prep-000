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
 var x = 0, y = 100;
 var newItem = item;
 var stringReturn = " has been added to your cart.";
 var stringName = "itemName";
 var stringPrice = "itemPrice";
 var itemPrice = Math.floor(Math.random() * ((y-x)+1) + x);
 var addItem = {[stringName]:newItem, [stringPrice]:itemPrice};
 
 cart.push(addItem);
 var returnMsg = newItem + stringReturn;
 return returnMsg;
}

function viewCart() {
  // write your code here
  // Returns example message:
  // In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  
  var checkCart = getCart();
  var arrayLength = checkCart.length;
  var i;
  //var item, price;
  var emptyCart = "Your shopping cart is empty.";
  var fString = "In your cart, you have ";
  var addString = "";
  var tempString = "";
  console.log(arrayLength);
  if (arrayLength === 0){
    return emptyCart;
  }
  else{
    for (i = 0; i < arrayLength; i++){
      var item = checkCart[i].itemName;
      var price = checkCart[i].itemPrice;
      tempString = item + " at $" + price;
      addString += tempString;
      
      if (arrayLength === 1 && i === 0){
        addString += ".";
      }
      else if ((arrayLength === 2 && i === 0) || ( arrayLength > 2 && i === arrayLength - 2)){
        addString += ", and ";
      }
      else if ( arrayLength > 2 && i < arrayLength - 2){
        addString += ", ";
      }
      else{
        addString += ".";
      }
      
    } // End for loop
    var finalString = fString + addString;
    return finalString;
  }// End else
    
}// End function viewCart

function total() {
  // Adds up the price of all items in the cart
  var checkCart = getCart();
  var arrayLength = checkCart.length;
  var i;
  var totalPrice = 0;
  
  for (i =0; i < arrayLength; i++){
    totalPrice += checkCart[i].itemPrice;
  }
  return totalPrice;
}// End function total()

function removeFromCart(item) {
  // write your code here
  var checkCart = getCart();
  var arrayLength = checkCart.length;
  var checkItem;
  var notFound = "That item is not in your cart.";
  var found = 0;
  var i;
  
  for (i = 0; i < arrayLength; i++){
    checkItem = checkCart[i].itemName;
    if (item === checkItem){
      checkCart.splice(i,1);
      found = 1;
    }
  }// End for loop
  
  if (found === 0){
    return notFound;
  }
  else{
   var updateCart = setCart(checkCart);
   return updateCart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var checkCart = getCart();
  var totalPrice = total();
  var noCardNumber = "Sorry, we don't have a credit card on file for you.";
  
  if (cardNumber){
    var paymentString = "Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber +".";
    checkCart.length = 0;
    var updateCart = setCart(checkCart);
    return paymentString;
  }
  else{
    return noCardNumber;
  }
  
  
  
}
