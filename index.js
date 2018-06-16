var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemName = {itemName: item, itemPrice: price};
  cart.push(itemName);
    console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {

if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
}
else if (cart.length === 1) {
    console.log(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
}
else if (cart.length === 2) {
    console.log(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`);
}
else if (cart.length >= 3) {
    console.log(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`);
  }
return viewCart;
  
}

function total() {
    
  
}

function removeFromCart(item) {

}
  
function placeOrder(cardNumber) {

  
}
