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
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 cart.push({ [item]: itemPrice });
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }
}


function total() {
  // write your code here

  var totalValue = 0;
  for(var i = 0; i < cart.length; i++) {
        var item = Object.keys(cart[i]);
        var price = parseInt(cart[i][item]);
        totalValue += price;
      }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }

}
