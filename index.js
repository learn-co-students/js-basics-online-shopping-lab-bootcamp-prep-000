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
  //var viewCartList = [];
  for(let i=0; i< length; i++){
    var cartList = cart[i];
    var cartItem = cartList.item;
    var it emPrice = cartList.price;
    for (let key in cart)
    var itemAtPrice = `${itemName} at ${itemPrice}`;
    viewCartList = [...viewCartList, itemAtPrice];
  }
   return `In your cart, you have  ${viewCartList.join(', ')}.`;
    }
    for ( let prop in person ) {
  console.log(`${prop}: ${person[prop]}`);
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
