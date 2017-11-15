var cart = [];


function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(itemName) {
  function  itemPrice (){
    return Math.floor(Math.random() * 100) + 1;} // returns a number between 1 and 100
  var item = {[itemName]: itemPrice()}
  cart.push(item);
  console.log(itemName + " has been added to your cart.")
  return cart
  }


function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
      var message = "In your cart, you have "
      for (var i = 0; i < cart.length; i++){
        for (var value in cart[i]){
          message += `${value} at $${cart[i][value]}`
          if (i !== cart.length - 1){
              message += ", "
            } else {
              message += "."
            }
          }
        }
      }
  console.log(message)
}





function total(array) {
    var total = []
    for (var i = 0; i < cart.length; i++){
      for (var value in cart[i])
          return cart[i][value]

        }
    console.log(array)
}

/*
function removeFromCart(item) {
  if (cart.hasOwnProperty(item) === false){
  console.log("That item is not in your cart.")
} else {
  for (var i = 0; i , cart.length; i++){
    if (i === cart.item){
      delete cart[i]}
    } else{return cart }
}
  return cart
}
*/

function placeOrder(cardNumber) {
  // write your code here
}
