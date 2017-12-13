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

/*function viewCart() {
  getCart();
  var cartArray = [];
  //console.log(cartArray);
  var keyArray = [];
  if(Object.keys(getCart()).length > 0){
  for(var c = 0; c < Object.keys(getCart()).length; c++){
    cartArray.push(Object.keys(getCart())[c]);
  }
}
  for(var a = 0; a < cartArray.length; a++){
    keyArray.push(Object.keys(getCart()[a]))
  }
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


function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }

  var string = "In your cart, you have "

  if (cart.length === 1) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i=0; i<cart.length; i++) {
      var text;
      if (i === cart.length - 2){
          text = ", and "
      } else if (i === cart.length - 1) {
          text = ""
      } else {
          text = ", "
      }
      string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`
    }
  }

  console.log(string)
}
*/

function viewCart() {

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
