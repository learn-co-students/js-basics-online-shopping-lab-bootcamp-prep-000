var cart = [];
var cartWithPrices = [];
var totalCost


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var itemName = item
var itemPrice = Math.floor((Math.random() * 100) + 1);
var itemWithPrice = { [itemName]: itemPrice }
cart.push(itemWithPrice)
console.log( item + " has been added to your cart.")
return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else if( cart.length == 1){
    var nameOfNumberOneKey = Object.keys(cart[0])[0]
    var priceOfObjectNumberOne = cart[0][nameOfNumberOneKey]
    console.log("In your cart, you have " + nameOfNumberOneKey + " at $" + priceOfObjectNumberOne + ".")
  }
  else if( cart.length == 2){
    var nameOfNumberTwoKey = Object.keys(cart[1])[0]
    var priceOfObjectNumberTwo = cart[1][nameOfNumberTwoKey]

    var nameOfNumberOneKey = Object.keys(cart[0])[0]
    var priceOfObjectNumberOne = cart[0][nameOfNumberOneKey]
    console.log("In your cart, you have " + nameOfNumberOneKey + " at $" + priceOfObjectNumberOne + " and " + nameOfNumberTwoKey + " at $" + priceOfObjectNumberTwo + ".")
    //console.log("In your cart, you have " + cart[0] + " at ")
  }
  else if( cart.length > 2){
    var updatedArray = []
    for (let i = 0; i < cart.length; i++){
      var nameOfRandomKey = Object.keys(cart[i])[0]
      var priceOfRandomObject = cart[i][nameOfRandomKey]

      if (i == (cart.length - 2))
      {
        updatedArray.push(nameOfRandomKey + " at $" + priceOfRandomObject + ", and ")
      }
      else if (i == (cart.length - 1))
      {
        updatedArray.push(nameOfRandomKey + " at $" + priceOfRandomObject + ".")
      }
      else
      {
        updatedArray.push(nameOfRandomKey + " at $" + priceOfRandomObject + ", ")
      }
    }

    console.log("In your cart, you have " + updatedArray.join(""))

  }
}

function total(){
  // write your code here
  var priceArray = []
  var totalPrice = 0;

  for (let i = 0; i < cart.length; i++){
    var nameOfRandomKey = Object.keys(cart[i])[0]
    var priceOfRandomObject = cart[i][nameOfRandomKey]
    totalPrice = totalPrice + priceOfRandomObject

  }
  return totalPrice
}

function removeFromCart(item)
{

  for (let i = 0; i < cart.length; i++)
  {
    // debugger
    if (cart[i].hasOwnProperty(item) == true)
    {
      // debugger

      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")

return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  var priceArray = []
  var totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    var nameOfRandomKey = Object.keys(cart[i])[0]
    var priceOfRandomObject = cart[i][nameOfRandomKey]
    totalPrice = totalPrice + priceOfRandomObject
  }

if ( cardNumber == undefined ){
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
else{
    console.log("Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber + ".")
  }

cart = [];

}
