var cart = [];
//helper function
function getRandomInt100() {
  return Math.floor(Math.random() * 99) +1;
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
 cart.push({itemName: item, itemPrice: getRandomInt100() });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var result = "In your cart, you have";
  for(var counter = 0; counter < cart.length; counter++){
    if(cart.length == 1)
    {
      result += ` ${cart[counter].itemName} at $${cart[counter].itemPrice}.`;
    } else if (counter == cart.length -1)
    {
      result += ` and ${cart[counter].itemName} at $${cart[counter].itemPrice}.`;
    } else 
    {
      result += ` ${cart[counter].itemName} at $${cart[counter].itemPrice},`;
    }
  }
  return result;
  
}

function total() {
  // write your code here
  var result = 0;
  for(var counter = 0; counter < cart.length; counter++){
    result += cart[counter].itemPrice;
  }
  return result;
}

function removeFromCart(item) {
  // write your code here
  for(var counter = 0; counter < cart.length; counter++){
    if(cart[counter].itemName == item){
      cart.splice(counter, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var result =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart([]);
  return result;
}
