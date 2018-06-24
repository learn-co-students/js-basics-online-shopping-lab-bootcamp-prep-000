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
 cart.push({itemName:item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length < 1){
    return "Your shopping cart is empty."
  }
  
  var cartList = `In your cart, you have `;
  
  if(cart.length === 1){
    cartList += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return cartList;
  }
  
  for(let i = 0; i < cart.length;i++){
    if(i === cart.length - 1){
      cartList += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      return cartList;
    }
    cartList += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    
  }
  
  return cartList;
}

function total() {
  // write your code herd
  var totalCost = 0;
  for(let i = 0; i < cart.length;i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length;i++){
    var isItem = cart[i].itemName;
    if(isItem === item){
      cart.splice(i,1);
      return viewCart();
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  var cartTotal = total();
  cart = [];
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
