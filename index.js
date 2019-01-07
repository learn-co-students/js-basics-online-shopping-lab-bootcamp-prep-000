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
  var randomPrice = Math.floor(Math.random() * 100);
  var newObj = {[item]: randomPrice};
  cart.push(newObj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here

  var statement = "In your cart, you have ";

  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    // loop through objects in array
    for (var i = 0; i < cart.length; i++){
        // loop through items in object
        for (var x in cart[i]){
            if (cart[i].hasOwnProperty(x)) {
                 statement += `${x} at $${cart[i][x]}`;
                 if (i < cart.length - 1 && cart.length > 2){
                   statement += ", ";
                 } else if (i < cart.length - 1 && cart.length == 2) {
                   statement += " ";
                 }

                 if(i == cart.length - 2) {
                   statement += "and ";
                 }
            }
        }
    }

    statement += ".";

  }
  console.log(statement);

}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++){
      for (var x in cart[i]){
          if (cart[i].hasOwnProperty(x)) {
               total += cart[i][x];
          }
      }
  }
  return total;
}




function removeFromCart(item) {
  // write your code here

  for (var i = 0; i < cart.length; i++){
      for (var x in cart[i]){
          if (item === x) {
              cart.splice(i, 1);
              return cart;
          }
      }
  }

console.log("That item is not in your cart.");
return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}
