var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*function addToCart(item) {
  var cartItem = {};
  cartItem.itemName = item;
  cartItem.itemPrice = Math.floor(Math.random()*Math.floor(100));
  cart.push(cartItem);
  return `${item} has been added to your cart.`
 // write your code here
}

function viewCart() {
  if(cart.length == 0){
    return "Your shopping cart is empty.";
  } else if(cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`;
  } else if(cart.length ==2){
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}, and ${cart[1].itemName} at ${cart[1].itemPrice}`;
  } else if(cart.length > 2){
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}${for(let i=1); i < cart.length - 1; i++){return `, ${cart[i].itemName} at ${cart[i].itemPrice}`}} and ${cart[cart.length].cart.itemName} at ${cart[cart.length].cart.itemPrice}.`;
  }
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
