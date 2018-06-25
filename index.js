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
 var price = Math.floor(Math.random() * 100);
 item = {itemName: item, itemPrice: price};
 cart.push(item);
 
 return item.itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }

  var message = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++){
    message = message + cart[i].itemName + " at $" + cart[i].itemPrice;
    if (i === cart.length -1){
      message = message + ".";
    } 
    if (i < cart.length - 1){
      message = message + ", ";
    } 
    if (i === cart.length -2){
      message = message + "and ";
    }
  }
  return message;

}

function total() {
  var totalCart = 0;
  for (var i = 0; i < cart.length; i++){
    totalCart = totalCart + cart[i].itemPrice;
  }
  return totalCart;
}

function removeFromCart(item) {
  var itemIndex = findItem(item);
  if (itemIndex === -1){
    return "That item is not in your cart.";
  }
  else{
    cart.splice(itemIndex, 1);
  }
}  
  
function findItem(itemName){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === itemName){
      return i;
    }
  }
  return -1;
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var pay = total();
  for (var i = 0; i < cart.length; i++){
    cart.shift();
  }
  
  return "Your total cost is $" + pay + ", which will be charged to the card " + cardNumber + ".";
}
