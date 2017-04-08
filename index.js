var cart = [];
//var itemToPurchase = "";

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

function getCart{

  return cart;
} // end of function getCart

function addToCart(item){

var price = Math.floor((Math.random * 100)+1);

var itemToPurchase = {item : price};

cart.push(itemToPurchase);

console.log(<item> + " has been added to your cart.");

return cart;

} //end of function itemPrice

function viewCart{

  var itemNames = Object.keys(cart);

  if(itemNames.length > 0){

    for (var i = 0, l = itemNames.length; i < l; i++){

    console.log('In your cart you have ${itemNames[i]} for ${cart[itemNames[i]]}.');

    }  else {

          console.log('Your shopping cart is empty.');

          } // end of if-else statement

        }// end of for-looop

} // end of function viewCart

function removeFromCart(item){

  var itemNames = Object.keys(cart);

  if(itemNames.length > 0){

    for (var i = 0, l = itemNames.length; i < l; i++){

      if(item == itemNames[i]) // check name of item to see if it matches itemnames in cart

    }  else { //How do I loop through the whole cart array and check all the item names??

          console.log('That item is not in your cart.');

          } // end of if-else statement

        }// end of for-looop

} // end of function removeFromCart
