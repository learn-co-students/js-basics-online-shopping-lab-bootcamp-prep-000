var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = {itemName: ''+item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(item);
 return item.itemName +" has been added to your cart."
}

function viewCart() {
if(cart.length===0){
  return 'Your shopping cart is empty.'
}else{
var newArray = [cart[0].itemName+" at $"+cart[0].itemPrice]
for(let i = 1; i<cart.length-1; i++){
  newArray.push(' '+cart[i].itemName+" at $"+cart[i].itemPrice)
}
if(cart.length>1){
  newArray.push(' and '+cart[(cart.length-1)].itemName+" at $"+cart[(cart.length-1)].itemPrice)
}
return 'In your cart, you have '+newArray+'.';
}
}

function total() {
  var total = 0;
  for(let i = 0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
for(var i = 0; i < cart.length; i++){
  if(item === cart[i].itemName){
    cart = [...cart.slice(0,i), ...cart.slice(i+1)];
    return cart;
  }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
if(cardNumber===undefined){
  return "Sorry, we don't have a credit card on file for you."
}else{
  var finalTotal = total();
  cart = [];
  return 'Your total cost is $'+ finalTotal + ', which will be charged to the card '+cardNumber+'.'
}
}
