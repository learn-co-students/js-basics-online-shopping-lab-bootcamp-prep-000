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
 var itemName=item;
 var itemPrice = Math.floor((Math.random() * 100) +1);
 var obj= {[itemName] : itemPrice};
 cart.push(obj);
 console.log(`${itemName} has been added to your cart.`);
 return(cart);
}

function viewCart() {
  // write your code here
  var string="In your cart, you have";
if(cart.length===0)
{
  console.log("Your shopping cart is empty.");
}
else {
  for(var i=0; i<cart.length;i++)
  {
  return(`${string} ${cart[i]} at ${cart[i]},`);
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
