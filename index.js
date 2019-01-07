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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var obj = {}
  obj[item] = price
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    var newArray = [];
    for (var i = 0, l = cart.length; i < l; i++) {
        var item = Object.keys(cart[i]);
        var price = cart[i][item];
        newArray.push(" " + item + " at $" + price)

   }
  console.log("In your cart, you have" + newArray.join(",") +".");
  }
}

function removeFromCart(itemRemove){
  for (var i=0; i <cart.length; i++) {
    var counter = 0
    //var itemKey = Object.keys(cart[i]);

    if (cart[i].hasOwnProperty(itemRemove)) {
      cart.splice(i,i+1)
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
     console.log("We don't have a credit card on file for you to place your order.")
   }

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

   cart = []
 }
