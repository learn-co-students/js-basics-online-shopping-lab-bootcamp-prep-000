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
 var price = Math.floor( Math.random() * 100 ) + 1;
 cart.push({itemName: item, itemPrice: price});
return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return `Your shopping cart is empty.`;
  }
  else{
  var viewCartList = [];
  for(let i=0; i< length; i++){
    let cartList = cart[i];
    let listItem = cartList.item;
    let listPrice = cartList.price;
    viewCartList = [...viewCartList, listItem at listPrice];
  }
  return `In your cart, you have ${viewCartList.join(', ')}.`;
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
