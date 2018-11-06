var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var itemPriceSum = Math.floor(Math.random()*100);
 var item = {itemName: name, itemPrice: itemPriceSum};
 cart.push(item);
 return name + " has been added to your cart.";
}

function viewCart() {
var msg;
if (cart.length === 0){
 msg = "Your shopping cart is empty.";
} else if (cart.length === 1){
  msg = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
}else {
  msg = "In your cart, you have ";
  var i;
  var cartList = [];
  for (i = 0; i < cart.length-1; i++){
    cartList.push(cart[i].itemName + " at $" + cart[i].itemPrice + ", ");
  }
  for (i = cart.length; i == cart.length; i++){
    cartList.push("and " + cart[cartList.length].itemName + " at $" + cart[cartList.length].itemPrice +".");
    for (i = 0; i < cartList.length; i++){
      msg += cartList[i];
    }
  }
  }
  return msg;
  }




function total() {
var sumTotal = 0;
for (var i=0; i < cart.length; i++){
  sumTotal += cart[i].itemPrice;
}
  return sumTotal;
}

function removeFromCart(item) {
  var msg;
  var newList = [];
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
    newList = cart.splice(cart.indexOf(cart[i]), 1);
    }
  }
if(newList.length === 0){
      msg = 'That item is not in your cart.';
    return msg;
    } else{
      return newList;
    }
}
  
  

function placeOrder(cardNumber) {
  if(cardNumber == null){
    return `Sorry, we don't have a credit card on file for you.`;
  } else { 
  var msg = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return msg;
  }
}
