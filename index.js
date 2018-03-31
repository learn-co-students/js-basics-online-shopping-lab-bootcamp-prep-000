var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 let newObj = {itemName:item, itemPrice:price};
 cart.push(newObj);
 return `${item} has been added to your cart.`;
 
}

addToCart('shoes')
addToCart('table')
addToCart('walker')
addToCart('book')
addToCart('radio')

function viewCart() {
var cartItems = [];
var string = "In your cart, you have ";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
     return string + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return string + `${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    var partialArray = cartItems.slice(0, cartItems.length - 1);
    console.log(partialArray)
    var partialReturn = string + partialArray.join(", ");
    console.log(partialReturn)
    var lastItem = " and " + cartItems[cartItems.length - 1] + ".";
    console.log(lastItem)
    return partialReturn + lastItem;
    
  } 
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