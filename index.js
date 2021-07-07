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
  cart.push({itemName:item,itemPrice: Math.floor(Math.random()* 100) });
  return `${item} has been added to your cart.`;
} 

function viewCart() {
  var item;
  var ret = 'In your cart, you have ';
  // write your code here
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'; 
  }
  if(cart.length === 1){
    return ret + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  for(var i = 0; i < cart.length; i++) {
    item = cart[i];
    if(i+1<cart.length){
      ret += `${item.itemName} at $${item.itemPrice}, `;  }else{
      ret += `and ${item.itemName} at $${item.itemPrice}.`;
    }
  } return ret;
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  } 
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    } 
  } 
    return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  var mainTotal = total();
  
  if(cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    cart = [];
    return `Your total cost is $${mainTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
