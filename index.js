var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100)
var newObject = {}
newObject[item] = price
cart.push(newObject)
console.log(`${item} has been added to your cart.`)
return cart
}
addToCart(eggs)

function viewCart() {
  getCart();
  var cartArray = [];
  //console.log(cartArray);
  var keyArray = [];
  if(Object.keys(getCart()).length > 0){
  for(var i = 0; i < Object.keys(getCart()).length; i++){
    cartArray.push(Object.keys(getCart())[i]);
  }
}
  //for(var a = 0; a < cartArray.length; a++){
    //keyArray.push(Object.keys(getCart()[a]))
  //}
  if(keyArray.length < 1){
    console.log("Your shopping cart is empty.");
  }
  if(keyArray.length === 1){
    console.log(`In your cart, you have ${keyArray[0]} at $${getCart()[0][keyArray[0]]}.`)
  }
  if(keyArray.length === 2){
      var contents2 = "In your cart, you have";
        for(var p = 0; p < keyArray.length - 1; p++){
          contents2 += ` ${keyArray[p]} at $${getCart()[p][keyArray[p]]}`;
        } for(var q = keyArray.length-1; q < keyArray.length; q++){
            contents2 += ` and ${keyArray[q]} at $${getCart()[p][keyArray[q]]}.`;
            console.log(contents2);
        }
      }
  if(keyArray.length > 2){
      var contents = "In your cart, you have";
        for(var i = 0; i < keyArray.length - 1; i++){
          contents += ` ${keyArray[i]} at $${getCart()[i][keyArray[i]]},`;
        } for(var j = keyArray.length-1; j < keyArray.length; j++){
            contents += ` and ${keyArray[j]} at $${getCart()[i][keyArray[j]]}.`;
        }
        console.log(contents);
  }
}

/*function viewCart() {
getCart()

var cartItems = []
var price = []
var msg = 'In your cart, you have'

if (cart.length === 0) {
  console.log ('Your shopping cart is empty.')
}

for (var i = 1; i < cart.length; i++) {
  if (i === 1) {
    console.log(`${msg} ${cart}.`)
  }
}

}
*/
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
