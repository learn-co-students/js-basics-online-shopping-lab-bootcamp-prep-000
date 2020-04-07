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
 var newPrice = Math.floor(Math.random() *100);
 var newItem = {itemName: item, itemPrice: newPrice};
 getCart().push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var empty = "Your shopping cart is empty.";
  if (getCart().length === 0){
    return empty;
  } else {
    return viewCartSentance();
  }
}

function total() {
  // write your code here
 var sum = 0;
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var result = '';
  for (var k = 0; k < getCart().length; k++){
    if (getCart()[k].itemName === item){
      result = getCart()[k];
      }
   }
  if (result === '') {  
      return 'That item is not in your cart.';
    } else {
      var toRemove = cart.indexOf(result);
      var removed = getCart().splice(toRemove,1);
      return removed;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var charge = total();
    setCart([]);
    return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`;
  }
}

function viewCartSentance (){
  var cartStatement = "In your cart, you have ";
   if (getCart().length >= 1){
    cartStatement += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  } if (getCart().length >= 2){
    if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = '';
    for (var j=1; j<getCart().length -1; j++) {
      middleCartItemsDescription += `, ${getCart()[j].itemName} at $${getCart()[j].itemPrice}`;
    }
    cartStatement += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`;
  }
    } return `${cartStatement}.`;
}