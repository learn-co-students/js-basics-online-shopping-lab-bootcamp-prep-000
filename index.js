var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObj = {'itemName': item, 'itemPrice': 0};
 newObj.itemPrice = Math.floor(Math.random() *100);
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var resLine = "In your cart, you have";
  if (cart.length == 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length == 1){
    resLine = resLine + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return resLine;
  }
  else {
    var resLine2 ="";
    for (let i=0; i<cart.length-1; i++){
     resLine2 = resLine2 + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
   }
    resLine2 = resLine2 + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    return resLine + resLine2;
  }
}

function total() {
  var theTotal = 0;
  for (let i=0; i<cart.length; i++){
    theTotal += cart[i].itemPrice;
  }
  return theTotal;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
    if (cart[i].itemName == item){
      return cart.splice(i,1);
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var totalA = total();
    cart = [];
    return `Your total cost is $${totalA}, which will be charged to the card ${cardNumber}.`
  }
}