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
 var price = Math.floor((Math.random() * 100) + 1 );
 cart.push(new Object({itemName:item, itemPrice:price}));
 return `${item} has been added to your cart.`
}
function viewCart() {
  // write your code here
if(cart.length === 0){
  return `Your shopping cart is empty.`;
}

for(let i=0;i < cart.length; i++){
  if(i == 1){
    return `In your cart, you have ${cart.itemName.item[i]} at ${cart.itemPrice.price[i]}.`;
  }
  else if(i == 2){
    return `In your cart you have ${cart.itemName.item[i]} at ${cart.itemPrice.price[i]} and ${cart.itemName.item[i]} at ${cart.itemPrice.price[i]}.`;
  }
    else
    return `In your cart you have ${cart.itemName.item[i]} at ${cart.itemPrice.price[i]}, ${cart.itemName.item[i]} at ${cart.itemPrice.price[i]} and ${cart.itemName.item[i]}.`;
  }
  
  
  //return `In your cart, you have ${cart.item[i]} at ${cart.item[i]}`// working on this
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
