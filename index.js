var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let obj = Object({
    itemName: item,
    itemPrice: Math.floor(Math.random()*100 + 1),
  });
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  let returnString = 'In your cart, you have ';
  for(let i=0; i<cart.length; i++){
    returnString += i === cart.length-1 ? `and ${cart[i].itemName} at $${cart[i].itemPrice}.`:`${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
  return returnString;
}

function total() {
  let total = 0;
  for(let i=0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if(item === cart[i].itemName){
      return cart.splice(i,1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber == undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  let theTotal = total();
  cart = [];
  return `Your total cost is $${theTotal}, which will be charged to the card ${cardNumber}.`
}
