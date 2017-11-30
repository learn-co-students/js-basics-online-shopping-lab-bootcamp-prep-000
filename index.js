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
 var obj={[item]: Math.floor(Math.random()*100)}
 cart.push(obj);
 console.log([item] + " has been added to your cart.");
 return [obj];
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    console.log("Your shopping cart is empty.");
  }
  var strings=[]
  for (var i = 0; i < cart.length; i++){
    if (1 < cart.length) {
      let j = 0;
      while (j < cart.length) {
        cart.push(`${itemName} at $${itemPrice}`);
        j++;
      }

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
