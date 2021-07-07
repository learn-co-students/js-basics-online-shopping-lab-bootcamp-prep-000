var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function findPrice(){
  let price=Math.floor(Math.random()*100);
  return price;}

function addToCart(item) {
 let cartItem={[item]:findPrice()};
 cart.push(cartItem);
 console.log(`${item} has been added to your cart.`)
 return cart;}

function cartBiArrayify(cart){
}

function viewCart() {
let keyArray=[];
let costArray=[];
let complexString="In your cart, you have ";
for (var i=0;i<cart.length;i++){
  keyArray.push(Object.keys(cart[i]).toString());
  costArray.push(cart[i][keyArray[i]]);}
console.log(keyArray);
console.log(costArray);
if (cart.length===0){
console.log('Your shopping cart is empty.');}
else if (cart.length===1){
console.log(`In your cart, you have ${keyArray[0]} at $${costArray[0]}.`)}
else if (cart.length===2){
  console.log(`In your cart, you have ${keyArray[0]} at $${costArray[0]} and ${keyArray[1]} at $${costArray[1]}.`);}
else if (cart.length>=3){
  for (var j=0;j<keyArray.length;j++){
    if (j!==keyArray.length-1){
      complexString+=keyArray[j]+" at $"+costArray[j]+", ";}
    else if (j===keyArray.length-1){
      complexString+="and "+keyArray[j]+" at $"+costArray[j]+".";}
    }
  }
  console.log(complexString);
}

function total() {
  let keyArray=[];
  let costArray=[];
  let totalCost=0;
  for (var i=0;i<cart.length;i++){
  keyArray.push(Object.keys(cart[i]).toString());
  costArray.push(cart[i][keyArray[i]]);}
  for (var j=0;j<cart.length;j++){
    totalCost+=costArray[j];}
    return totalCost;}

function removeFromCart(item) {
  for (var i=0;i<cart.length;i++){
    if (item in cart[i]){
    cart.splice(i,1);
    return cart;}}
    console.log('That item is not in your cart.');
    return cart;}

function placeOrder(cardNumber) {
if (typeof(cardNumber)!=='number'){
  console.log('Sorry, we don\'t have a credit card on file for you.');return;}
  else {
    let orderMessage=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    console.log(orderMessage);
    cart=[];
    }
}

console.log(findPrice());
addToCart('Tobaccy');
addToCart('Sauce');
addToCart('Shrimps');
addToCart('Cornstarch');
addToCart('Whiskey');
viewCart();
console.log(total());