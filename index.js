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
 
 item = {itemName : item , itemPrice : Math.floor(Math.random() * (100 - 1 +1)+1)};
 
 cart.push(item);
 
 return `${item.itemName} has been added to your cart.`;
}



function viewCart() {
  // write your code here
  getCart();
  if(cart.length === 0) {return 'Your shopping cart is empty.'}
  for(let i = 0; i < cart.length; i++){
    let items=[];
    items.push(`${item[i].itemName} at ${item[i].itemPrice}$.`);
  }
  return 'In your cart, you have' + items.join(', ');
}






function total() {
  // write your code here
  var sum = 0;
  for(let i=0; i < cart.length; i++){
   sum += item[i].itemPrice;
  }
  return sum;
}




function removeFromCart(item) {
  // write your code here
  
  for(let i = 0; i < cart.length; i++) {
    if(item === item.itemName[i]){ delete item.itemName[i];}
    return cart;
  }
  return 'That item is not in your cart.';
}






function placeOrder(cardNumber) {
  // write your code here
}
