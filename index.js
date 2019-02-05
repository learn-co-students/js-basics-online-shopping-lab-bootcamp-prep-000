var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var objItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 };
 cart.push(objItem);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var result = "In your cart, you have";
  for(var i = 0; i < cart.length; i++){
    result += `${cart.length != 1 && i === cart.length-1 ? ' and' : ''} ${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length-1 ? '.' : ','}`;
  }
  return result;
}

function total() {
  var result = 0;
  cart.forEach(function(item){
    result += item.itemPrice;
  });
  return result;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return `Removed ${item} from cart.`;
    }
  }
  
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber){
      const result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      cart = [];
      return result;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }

}
