var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor(Math.random() * 100) + 1;
  newItem.itemName = item;
  newItem.itemPrice = price;
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
   var defMsg = `In your cart, you have`;
  var adMsg = `.`;
  var its = [];
  var i = 0
  if(cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else if (cart.length === 1){
 
  for( i=0; i<cart.length; i++){
    its.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `${defMsg} ${its}${adMsg}`
}
else if (cart.length === 2){
   adMsg = `, and`;
  for( i=0; i<cart.length; i++){
    its.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `${defMsg} ${its.join(', and ')}.`
}
else if (cart.length === 3){
   adMsg = `, and`;
  for( i=0; i<cart.length; i++){
    its.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `${defMsg} ${its[0]}, ${its[1]}, and ${its[2]}.`
}
}

function total() {
  var tp = 0
  for(var i=0; i<cart.length; i++){
   tp += cart[i].itemPrice;
  }
  return tp;
}

function removeFromCart(item) {
  var i = 0;
  var mm =[];
  for (i=0; i<cart.length; i++){
   if(cart[i].itemName == item){
     cart.splice(i, 1);
    return cart;
   } 
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else{
    var pri = total()
    var ends = cart.length;
    cart.splice(0, ends)
    return `Your total cost is $${pri}, which will be charged to the card ${cardNumber}.`
  }
}





 