var cart = [];
var cardNumber = '';

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    } //end of nested for-loop

  } // end of parent for-loop

  return t
} // end of function total

function getCart(){

  return cart;
} // end of function getCart

function addToCart(item){

var price = Math.floor((Math.random * 100)+1);

var itemToPurchase = {item : price};

cart.push(itemToPurchase);

console.log(" ${item} has been added to your cart.");

return cart;

} //end of function itemPrice

function viewCart(){

  var itemNames = Object.keys(cart);

  if(itemNames.length > 0){

    for (var i = 0, l = itemNames.length; i < l; i++){

    console.log('In your cart you have ${itemNames[i]} for ${cart[itemNames[i]]}.');
  } // end of for-loop
    }else {

          console.log('Your shopping cart is empty.');

          } // end of if-else statement

} // end of function viewCart

function removeFromCart(item){

  var itemNames = Object.keys(cart);

  if(itemNames.length > 0){

    for (var i = 0, l = itemNames.length; i < l; i++){

      if(cart.hasOwnProperty(item)){ // check name of item to see if it matches itemnames in cart

        var position = cart.indexOf(item);

        cart.splice(position,1);

        return cart;

    }  else { //How do I loop through the whole cart array and check all the item names??

          console.log('That item is not in your cart.');

          } // end of if-else statement

        }// end of for-looop
} // end of if statement

} // end of function removeFromCart

function placeOrder(cardNumber){

  if (cardNumber == Null){

    console.log ( "We don't have a credit card on file for you to place your order.");

  }else {

    console.log( "Your total cost is $${total()}, which will be charged to the card ${cardNumber}.")

    cart.length = 0; // empty the array by setting its length to 0

    return cart;
  } //end of if-else statement

} // end of function placeOrder
