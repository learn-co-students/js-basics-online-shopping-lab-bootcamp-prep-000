var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {itemName: item, itemPrice: Math.floor(Math.random(1)*101)};
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  var text = "In your cart, you have ";
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }else if(cart.length === 1){
    text += cart[0].itemName+' at $'+ cart[0].itemPrice+'.';
    return text;
  }else if(cart.length === 2){
    for(var i = 0; i < cart.length; i++){
       text += cart[i].itemName+' at $'+ cart[i].itemPrice+', and ';
     }
      text = text.slice(0,text.length-6);
      text += ".";
      return text;
    }else if(cart.length >= 3){
   for(var j = 0; j < cart.length; j++){
       text += cart[j].itemName+' at $'+cart[j].itemPrice;
       if(j > 0){
         text += ', and ';
       }else{
         text += ', ';
       }
     }
     text = text.slice(0,text.length-6);
     text += ".";
     return text;
 }
}

function total() {
  var total = 0;
  for(var i =0; i < cart.length;i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(var i =0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }else{
    var payment = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return payment;
  }
}
