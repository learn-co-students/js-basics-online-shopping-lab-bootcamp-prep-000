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
 var itemName = item;
 var items ={[itemName]:price};
 cart.push(items);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var keys = [];
  for(var i = 0; i < cart.length; i++){
    keys.push(Object.keys(cart[i]));
  }
  var str ='';
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else if (cart.length === 1){
  console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]}.`);
}else if(cart.length === 2){
  console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]} and ${keys[1]} at $${cart[1][keys[1]]}.`);
}else{
  var middle = '';
  for(var ind = 1;ind< cart.length -1; ind++){
    middle +=(`, ${keys[ind]} at $${cart[ind][keys[ind]]}`);
  }
  var last = cart.length-1;
  console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]}${middle}, and ${keys[last]} at $${cart[last][keys[last]]}.`);
 }

}

function total() {
  // write your code here
  var total = 0;
  var keys = [];
  for(var i=0;i<cart.length; i++){
    keys.push(Object.keys(cart[i]));
  }
  console.log(keys);
  for(var ind = 0;ind<keys.length;ind++){
    total += cart[ind][keys[ind]];
  }
    console.log(total);
  return total;
}

function removeFromCart(item) {
  // write your code here
for (var i = 0; i < cart.length;i++){
  if (cart[i].hasOwnProperty(item)){
    var subCart = cart.splice(i,1);
    console.log(subCart);
    return cart;
  }
}
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }else{
    var tot = total();
    console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
