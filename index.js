var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   var price = Math.floor(Math.random() * 100);
   var cartObj = { [item]: price };
   cart.push(cartObj);
   console.log(`${item} has been added to your cart.`);
   return cart;
}
function viewCart(item) {

}

function total() {

}

function removeFromCart(item) {
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
  console.log("Sorry, we don't have a credit card on file for you.")
    }
  else {
  console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`)
  return cart = []
    }
  }
