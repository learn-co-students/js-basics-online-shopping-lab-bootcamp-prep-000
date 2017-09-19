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
var c = {[item] : Math.floor(Math.random() * 100)}
console.log(`${item} has been added to your cart.`)
cart.push(c)
return cart
}

function viewCart() {
  // write your code here
  // console.log("cart length",cart.length)
  var item1,item2 = "";
  var last = 0;
  var desc = `In your cart, you have `
  if (cart.length < 1) {
    desc = "Your shopping cart is empty.";
  } else if (cart.length == 1){
    item1 = Object.keys(cart[0])[0];
    desc += `${item1} at $${cart[0][item1]}.`
  } else if (cart.length == 2){
    item1 = Object.keys(cart[0]);
    item2 = Object.keys(cart[1]);
    desc += `${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`
  } else { // 3 or more items
        for (var i = 0; i < cart.length -1; i++){
          item1 = Object.keys(cart[i]);
      desc += `${item1} at $${cart[i][item1]}, `;
          last = cart.length-1;
    }
item1 = Object.keys(cart[last]);
    desc += `and ${item1} at $${cart[last][item1]}.`;
  }
  console.log(desc) // 'Print the description whatever is in the basket'
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }
return total
}

function removeFromCart(item) {
  // write your code here
  var itemFound = false
  for ( var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      // delete item object from array
      cart.splice(i,1)
      // set flag to show item was found and deleted
      itemFound = true
    }
  }
  if (!itemFound){
    console.log("That item is not in your cart.")
  }
  return cart // return cart
}

function placeOrder(cardNumber) {
  // write your code here
if (arguments.length < 1){
  console.log("Sorry, we don't have a credit card on file for you.")
} else {
  var Total = total()
console.log(`Your total cost is $${Total}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
}
