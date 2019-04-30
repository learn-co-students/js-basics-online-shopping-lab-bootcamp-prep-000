var cart = [];

// item object function
// function Item(name,price){
//   this.itemName = name;
//   this.itemPrice = price;
// }
//random price function
function randomPrice(){
  return Math.floor((Math.random() * 100) + 1);
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var tempItem = {itemName: item, itemPrice : randomPrice()}
 cart.push(tempItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here

  var message = `In your cart, you have `;

  if(cart.length === 0 ){
    return `Your shopping cart is empty.`
  }
  for(var i = 0; i < cart.length; i++){
    if(i === cart.length - 1 && cart.length === 1){
      message = message.concat(`${cart[i].itemName} at $${cart[i].itemPrice}.`);
      return message;
    }
    if(i === cart.length - 1){
      message = message.concat(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      return message;
    }
    message = message.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
  }
return message;
}

function total() {
  // write your code here
  var runningTotal = 0;
  for(var i = 0; i < cart.length;i++){
    runningTotal += cart[i].itemPrice;
  }
  return runningTotal;
}


function removeFromCart(item) {
  // write your code here
  // Loop through all items in cart
  for(var i = 0; i < cart.length; i++){

    // Check for item and perform requested operation
    if(cart[i].itemName === item){
      return cart.splice(i,1)
    }
    // If we never find the item, then it can't be in the cart
  }
  return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }

  var tempTotal = total();
  cart = cart.splice(0,cart.length-1);
  return `Your total cost is $${tempTotal}, which will be charged to the card ${cardNumber}.`
}
