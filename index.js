var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randPrice(){
  // Random int between 1 and 100;
  return Math.floor(Math.random() * 99) + 1;
}

function addToCart(item) {
 // write your code here
 let newItem = {
   itemName: item,
   itemPrice: randPrice()
 };
 
 cart.push(newItem);
 
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let count = cart.length;
  if(count === 0){
    return "Your shopping cart is empty.";
  }
  
  let toks = [];
  for(let i=0; i<count; i++){
    let item = cart[i];
    let name = item.itemName;
    let price = item.itemPrice;

    toks.push(`${name} at $${price}`);
  }
  
  if(count > 1){
    // If multiple tokens, prepend "and" to last token
    let lastTok = toks[toks.length - 1];
    toks[toks.length - 1] = "and " + lastTok;
  }
  
  let joinedToks = toks.join(", ");
  
  return `In your cart, you have ${joinedToks}.`;
}

function total() {
  // write your code here
  let total = 0;
 
  for(let i=0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
 
  return total;
}

function removeFromCart(itemName) {
  // write your code here
  let filteredCart = cart.filter(function(item){
    return item.itemName != itemName;
  });
  
  if(filteredCart.length === cart.length){
    return "That item is not in your cart.";
  }
  
  cart = filteredCart;
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  let cartTotal = total();
  let message = `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  
  return message;
}
