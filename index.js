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
 var newObj = Object.assign({}, cart);
 newObj[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(newObj);
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else {
    var str = "In your cart, you have ";
    if(cart.length === 1) {
      var objKey = Object.keys(cart[0])[0]
      str = str + objKey + " at $" + cart[0].objKey + "."
    }
  }
  console.log(str)
}

function total() {
  // write your code here
  var sum
  for (var i = 0; i < getCart().length; i++) {
    var objKey = Object.keys(getCart()[i])[0]
    sum += getCart()[i][objKey]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
