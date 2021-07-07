var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100) + 1
 var newItem = {itemName: item, itemPrice: price};
 cart.push(newItem)
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  var string = "In your cart, you have";
  var cartList = [];
  
  for (var i=0; i < cart.length; i++) {
    cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  if (cart.length === 1) {
    return `${string} ${cartList[0]}.`;
  }
  if (cart.length === 2) {
    return `${string} ${cartList[0]}, and ${cartList[1]}.`;
  }
  if (cart.length >= 3) {
    return `${string} ${cartList.slice(0,cartList.length-1).join(", ")}, and ${cartList[cartList.length-1]}.`;
   }
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
 var itemCheck= false;
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
        itemCheck = true;
        cart.splice(i,1);
 }
}
    if(!itemCheck) {
    return "That item is not in your cart.";
    }
    if(!itemCheck){
    console.log("That item is not in your cart.");
  }
  return cart;
 }

function placeOrder(cardNumber) {
  // write your code here
 var totalCost = total();
 if (cardNumber) {
   cart = [];
   return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
 } else {
   return "Sorry, we don't have a credit card on file for you.";
 }
}
