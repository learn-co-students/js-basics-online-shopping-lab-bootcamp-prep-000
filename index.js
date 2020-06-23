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
 var itemObj = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
 cart.push(itemObj);
console.log(cart);
return item + " has been added to your cart.";
}

function viewCart() {
  var cartContents = "In your cart, you have ";
  var i = 0;
  if ( cart.length < 1){
    return "Your shopping cart is empty.";
  } else {
  for (i = 0; i < (cart.length); i++){
   cartContents = cartContents + cart.itemName[i] + " at $" + cart.itemPrice + ".";
  }
  console.log(cartContents);
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


addToCart('grapes');
console.log( cart.itemPrice);
viewCart();