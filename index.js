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
 cart.push({[item]: randomPrice()});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  var stringToPrint = "In your cart, you have";

  for (var i = 0; i < cart.length; i++) {
    var shoppingItem = cart[i];
      for (var j in shoppingItem) {
        if (i === 0) {
          if (cart.length > 2) {
            stringToPrint += ` ${j} at $${shoppingItem[j]},`
          }else{
            stringToPrint += ` ${j} at $${shoppingItem[j]}`
          }
        }else if(i === (cart.length - 1)){
            stringToPrint += ` and ${j} at $${shoppingItem[j]}`
        }else{
            stringToPrint += ` ${j} at $${shoppingItem[j]},`
        }
      }
  }
  console.log(stringToPrint+".");
}

function total() {
  // write your code here
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    var shoppingItem = cart[i];
    for(var j in shoppingItem){
      totalValue += shoppingItem[j];
    }
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  var startCartLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    var shoppingItem = cart[i];
    var key = Object.keys(shoppingItem);
    if (shoppingItem.hasOwnProperty(item)) {
      cart.splice(i,1);
    }
  }
  if (startCartLength === cart.length) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.length = 0;
}

function randomPrice(){
  //vrne stevilko med 1 in 100
  return Math.floor(Math.random() * 100) + 1;
}
