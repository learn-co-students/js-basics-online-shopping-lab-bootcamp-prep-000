var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const setPrice=Math.floor(Math.random()*100)+1;
const newCart= new Object({itemName:item,itemPrice:setPrice});
cart.push(newCart);
return (item+" has been added to your cart.");
}

function viewCart() {
  if(cart.length==0){
  return ("Your shopping cart is empty.");
}
for (let i=0;i<cart.length;i++){
  if (cart.length==1){
  return ("In your cart, you have "+cart[0].itemName+" at $"+cart[0].itemPrice+".");
}
  else if (cart.length==2){
    return ("In your cart, you have "+cart[0].itemName+" at $"+cart[0].itemPrice+", and "+cart[1].itemName+" at $"+cart[1].itemPrice+".")
  }else if (cart.length==3){
    return ("In your cart, you have "+cart[0].itemName+" at $"+cart[0].itemPrice+", "+cart[1].itemName+" at $"+cart[1].itemPrice+", and "+cart[2].itemName+" at $"+cart[2].itemPrice+".")
  }
}
}

function total() {
  var sum=0;
  for(let i=0;i<cart.length;i++){
sum += cart[i].itemPrice;
}
return sum;
}

function removeFromCart(item){
  for (var i in cart){
    if(cart[i].itemName == item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
if(cardNumber){
   var sale=("Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".")
  cart=[];
    return sale;
}
else{
  return "Sorry, we don't have a credit card on file for you."
}
}
