var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var newObj = {itemName: item, itemPrice: itemPrice};
  cart.push(newObj);
  return `${item} has been added to your cart.`;
}
addToCart('bananas');
addToCart('eggs');
addToCart('almonds');

function viewCart() {
  // write your code here
  //Code below is bad, only works with 3 items. Once 3+ is added to the cart it will break. Need to find universal code..... /:
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  
  var itemString ='';
  
  if(cart.length === 1){
    itemString = `${cart[0].itemName} at $${cart[0].itemPrice}`;
  } else if (cart.length === 2){
    itemString = `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`;
  } else if (cart.length === 3){
    itemString = `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}`
  }
  return `In your cart, you have ${itemString}.`;
}


function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
       cart.splice(i, 1);
       return cart;
    }
  }
  return 'That item is not in your cart.';
}


function placeOrder(cardNumber) {
  // write your code here
  var stringOrder = '';
  
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  
   stringOrder = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
   
   cart =[];
   return stringOrder;
}

console.log(placeOrder(83296759));
console.log(cart);
