var cart = [];

function getCart() {
 return cart;
}
 
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemCart = { 
  itemName: itemName,
  itemPrice: Math.random() * (100 - 0) + 0
};
cart.push(itemCart);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var messageArray = []
  var message = `In your cart, you have `
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
        messageArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
     } else if (cart.length === 2) {
       messageArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`)
     } else{
       for(var i = 0; i < cart.length; i++){
        if (i < cart.length -1){
        messageArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
        }
        else messageArray.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}` )
}
}
return message + messageArray.toString() + `.`;
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
