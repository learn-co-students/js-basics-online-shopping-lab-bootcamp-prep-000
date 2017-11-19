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
var min = 1;
var max = 100;

var price = Math.floor(Math.random() * (max - min + 1)) + min

var newObject = {}
var itemName = item
newObject = {[itemName]: price}

cart.push(newObject)

console.log(`${item} has been added to your cart.`)

return cart


}

function viewCart() {
  // write your code here

  var statement = "In your cart, you have "


  if(cart.length === 1){
    statement += `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
    console.log(statement)
  }


  if (cart.length === 2){
    statement += `${cart[0]['itemName']} at $${cart[0]['itemPrice']} and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
    console.log(statement)

  }

  if (cart.length > 2){
    for (var i = 0; i < cart.length; i++){
      if (i < cart.length - 1){
        statement += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else {
        statement += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      }
    }
    console.log(statement)
  }

  if (cart.length === 0){
    console.log("Your shopping cart is empty.")

  }
  

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
