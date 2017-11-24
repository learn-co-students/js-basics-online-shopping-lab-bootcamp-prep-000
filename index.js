var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // Generate Random number
 var itemPrice = Math.random() * 100;
 itemPrice = Math.floor(itemPrice);
 var newItem = {[itemName]: itemPrice};
 // Push Item & Number to Cart as Object
 cart.push(newItem);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var returnString = "";
  // Empty Cart Return 'Your shopping cart is empty.'
  let length = cart.length
  if (length == 0) {
    return 'Your shopping cart is empty.';
  } else {
    for (var i = 0; i < length; i++) {
      var keyName = Object.keys(cart[i]);
      var value = cart.keyName;
      var itemString = `${keyName} at $${value},`;
        if (i === length - 2) {
          returnString = returnString + ' and ';
        } if (i === length - 1){
          itemString = itemString - ',';
        }
        returnString = returnString + itemString;
    }
    console.log(`In your cart, you have ${returnString}.`)
  }
}

  // Two Item Prints 'In your cart, you have ${} and ${}.'
  // Three or More Items Prints ...

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
