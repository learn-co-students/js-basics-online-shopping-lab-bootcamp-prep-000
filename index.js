var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101) +1;
  var obj = {};
  obj.itemName = item;
  obj.itemPrice = price;
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0)
  return "Your shopping cart is empty.";
  
  else{
  var newArray = cart.slice(0);
  for (var i=0; i<newArray.length; i++){
      newArray[i] 
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
