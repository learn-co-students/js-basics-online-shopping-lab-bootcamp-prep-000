var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  const itemName = {itemName: item, itemPrice: price};
  cart.push(itemName);
  return `${item} has been added to your cart.`;
}

function viewCart(){
 if (cart.length === 0){
    return "Your shopping cart is empty.";
  } 
  var viewResponse = "In your cart, you have";
  
  for(let i = 0; i < cart.length; i++){
    if(cart.length === 1){
    return viewResponse += ` ${cart[0].itemName} at $${[cart[0].itemPrice]}.`;
    } else if(cart.length === 2){
      return viewResponse += ` ${cart[0].itemName} at $${[cart[0].itemPrice]}, and ${cart[1].itemName} at $${[cart[1].itemPrice]}.`;
    } else if(cart.length === 3){
      return viewResponse += ` ${cart[0].itemName} at $${[cart[0].itemPrice]}, ${cart[1].itemName} at $${[cart[1].itemPrice]}, and ${cart[2].itemName} at $${[cart[2].itemPrice]}.`;
    }
  }
}

function total() {
  var sum = 0;
  for(let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

 
function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  } 
   if(!cart[i]){
      return "That item is not in your cart.";
   }
}

function placeOrder(cardNumber) {
  var myTotal = total();
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  } 
  else {
    cart = [];
    return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`;
  }
}

 
