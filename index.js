var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(1 + 100*Math.random());
  var obj = {[item]: price};
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0){
    return "Your shopping cart is empty.";
  } else {
   for (let i = 0; i < cart.length; i++){
     console.log("In your cart, you have " + cart[i].itemName + " at $" + cart[i].price);
    }
  }
}

function total() {
  var total = 0;
 for (let i = 0; i < cart.length; i++){
  total = total + cart[i].price;
 }
 return total;
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
