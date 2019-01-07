var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newOne = {
    [item]: Math.floor(Math.random()*100)
  }
  cart.push(newOne)
  console.log(item + " has been added to your cart.")
  return cart;
}


function viewCart() {
var finalStat = "In your cart, you have "
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 1){
      finalStat += Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + "."
}
  else if (cart.length === 2) {
      finalStat += Object.keys(cart[0]) + " at $" + Object.values(cart[0]) + " and " + Object.keys(cart[1]) + " at $" + Object.values(cart[1]) + "."

      }


  else {
    for (var x = 0; x < (cart.length-1); x++){
        finalStat += Object.keys(cart[x]) + " at $" + Object.values(cart[[x]]) + ", ";
}
    for (var y = cart.length-1; y < cart.length; y++){
        finalStat += "and " + Object.keys(cart[y]) + " at $" + Object.values(cart[y]) + "."
}
}
console.log(finalStat)
}

function total() {
  var total = 0;
  for (var x = 0; x < cart.length; x++){
    total += Number(Object.values(cart[x]));
  }
  return total;
}

function removeFromCart(toRemove){
  for (var x = 0; x < cart.length; x++){
    if (cart[x].hasOwnProperty(toRemove) === true){
      cart.splice(x,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNum){
  if (typeof cardNum !== "number"){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
      console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNum + ".");
      cart = [];
}
}
