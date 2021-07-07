var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function price() {
    Math.floor(Math.random()*100+1);
  }
  cart.push({ itemName: item,itemPrice: price()});
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if(cart.length === 0) {
        return ("Your shopping cart is empty.")
   }  else {
  var items = [];
for(var i = 0; i < cart.length; i++) {
  if (i === 1) {
   items.push(`and ${cart[i].itemName at $${cart[i].itemPrice}}`)
      }  else {
    items.push(`${cart[i].itemName at $${cart[i].itemPrice}}`)
    }
  }
}
return `In your cart, you have ${items.join(', ')}.`
}

function total() {
  // no arg. iterates through cart array return the current total value


}

function removeFromCart(item) {
  //accepts one arg, name of the item that should be removed
  //Array.prototype.splice();
  //if none, return "That item is not in your cart."


}

function placeOrder(cardNumber) {
  // one arg = a credit card number.
  //credit card received, function - empty the cart array
  //return "Your total cost is #??, which will be charged to the card ##"
  //use total() to get ## and placeOrder for credit card ##.
  if (cardNumber === undefined) {


}
