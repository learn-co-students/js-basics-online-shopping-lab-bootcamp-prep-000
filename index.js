var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // rite your code here
 var itemName = {itemName: item};
 var price = Math.floor(Math.random() * 100) + 1;
 var prices = {itemPrice: price};
const totalItem = Object.assign(itemName, prices);
 cart.push(totalItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  var message =[];
  for (var i = 0; i < cart.length; i++) {
    message.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (cart.length === 1){
    return `In your cart, you have ${message}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${message.join(', and ')}.`;
  }
  else{
    var finalItem = message.pop()
    return `In your cart, you have ${message.join(', ')}, and ${finalItem}.`;
  }
}



function total() {
  // write your code here
  var priceList = []
  for (var i = 0; i < cart.length; i++) {
    priceList.push(parseInt(cart[i].itemPrice));
  }
  var totalPrice = priceList.reduce((total, amount) => total + amount)
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
for (var i = 0; i < cart.length; i++){
  if (cart[i].itemName === item){
    cart.splice(i, 1);
    return cart
  }
}
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you."
} else {
  var totalPrice = total()
  cart = [];
return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
}

}
