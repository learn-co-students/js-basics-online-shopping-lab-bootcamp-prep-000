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
 var newItem = Object.assign({}, {'itemName': item, 'itemPrice': Math.random() * 100});
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var contents = "In your cart, you have ";
  if(cart.length > 0){
  for(let i = 0; i < cart.length; i++){
    if(i === cart.length - 1 && cart.length > 1){
      contents += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else if(i === cart.length - 1 && cart.length === 1){
      contents += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else{
      contents += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  }
   console.log(contents);
   return contents;
  }
  else{
    return "Your shopping cart is empty.";
  }
 
}

function total() {
  // write your code here
  var totalValue = 0;
  for(let i = 0; i < cart.length; i++){
    totalValue += parseFloat(cart[i].itemPrice);
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  const origCartLength = cart.length;
  for (let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
    }
  }
  if(cart.length === origCartLength){
    return "That item is not in your cart.";
  }
  else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber !== undefined){
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
  else{
    return "Sorry, we don't have a credit card on file for you.";
  }
}
