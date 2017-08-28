var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor(Math.random()*100+1)
var itemName = { [item]: itemPrice }
cart.push(itemName)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
var statement = "In your cart, you have ";
const l = cart.length
if (l === 0) {
   console.log("Your shopping cart is empty.")
} else {
  for (var i = 0; i < l; i++) {
    for (var x in cart[i]) {
      if (cart[i].hasOwnProperty(x)) {
        statement += `${x} at $${cart[i][x]}`
          if (i < l - 1 && l > 2){
                      statement += ", ";
                    } else if (i < l - 1 && l == 2) {
                      statement += " ";
                    }
                    if(i == l - 2) {
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
  if (!cardNumber) {
     console.log("Sorry, we don't have a credit card on file for you.")
       return false
    }
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
