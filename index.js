var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 99 )+ 1;
 var object = {[item]: itemPrice};
 cart.push(object);
 console.log(item + " has been added to your cart.");
 return cart;

}

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
    return
  }
  var finalArray = [];
  for(var i= 0; i < cart.length; i++){
    var object = cart[i];
    var itemName = Object.keys(object)[0];
    var itemPrice = object[itemName];
    finalArray.push(itemName + " at $" + itemPrice)
  }
    if(cart.length === 1){
      console.log("In your cart, you have " + finalArray + ".");
    } else if(cart.length === 2){
      var finalArr= finalArray.join(" and ");
    } else {
      finalArray[finalArray.length-1] = "and " + finalArray[finalArray.length-1];
      var finalArr = finalArray.join(", ");
  }
 console.log("In your cart, you have " + finalArr + ".");
}

function total() {
var totalPrice = 0;
  for(var i=0; i<cart.length; i++){
    var object = cart[i];
    var itemName = Object.keys(object);
    var itemPrice = object[itemName];
    totalPrice += itemPrice;
}
return totalPrice;
}

function removeFromCart(item) {
    var items = [];
    var finalArray;
  for(var i=0; i<cart.length; i++){
    var object = cart[i];
    var itemName = Object.keys(object);
    finalArray = items.push(itemName[0]);
  }
  var index = items.indexOf(item);
  if(index === -1){
    console.log('That item is not in your cart.');
  } else {
    cart.splice(index, 1);
    console.log(cart);

  }
}

function placeOrder(cardNumber) {
var totalPrice = total();
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log("Your total cost is " + "$" + totalPrice + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
