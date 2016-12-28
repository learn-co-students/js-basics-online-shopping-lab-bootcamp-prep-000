var cart=[];
var obj;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){

  return cart;
}

function addToCart(item){

var price;
price= Math.random(0,1);
price = Math.floor(price);
 obj = {[item]:price};
cart.push(obj);

console.log( `${item} has been added to your cart.`);

return cart;
}

function viewCart(){
  var list;


  list = `In your cart, you have`;
if(cart.length==0){

  console.log("Your shopping cart is empty.");
}else{

for (let i=0;i<cart.length;i++)
{
if(i<(cart.length-1)){
  list+= ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]},`;

}
 if(i==(cart.length-1)){
  list+= ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`;
  console.log(list);
}


}
}
}


function removeFromCart(item){
  debugger;
for(var i=0;i<cart.length;i++){
  debugger;
  if(cart[i].hasOwnProperty(item)){
    cart.splice(i,1);

  }

}

if(cart.length==0){
    console.log(`That item is not in your cart.`);


}

return cart;
}


function placeOrder(cardNumber){

if(cardNumber==null||cardNumber==undefined||cardNumber==``){
  console.log(`We don't have a credit card on file for you to place your order.`);
}else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
}
return cart=[];
}
