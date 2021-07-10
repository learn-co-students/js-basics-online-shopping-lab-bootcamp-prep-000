var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var addedItem = {
  itemName:item, 
  itemPrice:Math.floor(Math.random()*100)
};

cart.push(addedItem);

return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    var purchases = "In your cart, you have ";
    for (var i = 0; i <cart.length;i++){
      if (i === cart.length-1 && cart.length === 1){
        purchases += (`${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else if (i === cart.length-1 && cart.length>1){
        purchases += (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } else {
        purchases += (`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
    }
    return purchases;
  }
}
function total() {
  let sum = 0;
  for (var i = 0; i<cart.length;i++){
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
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
   if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  var priceToPay = total();
  cart = [];
  return `Your total cost is $${priceToPay}, which will be charged to the card ${cardNumber}.`;
}
