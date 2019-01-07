var cart = [];
var strArr = [];
var keys = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice(){
  var price = Math.random() * 10;
  if (price < 1){
    price = 1;
  }
  return price = Math.floor(price);
}

function addToCart(item) {
  var money = getPrice();
 cart.push({[item]: money});
 var consoleRet = `${item} has been added to your cart.`;
 console.log(consoleRet);
 return cart;
}

function viewCart() {
strArr = [];
if (cart.length === 0){
  console.log("Your shopping cart is empty.");
}

else if (cart.length === 1){
  var name = Object.keys(cart[0]);
  console.log(`In your cart, you have ${name} at $${cart[0][name]}.`)
}

else if (cart.length === 2){
  keys = [];
  for (var j = 0; j<cart.length; j++){
 keys.push(Object.keys(cart[j]));
}
  for (var i = 0; i < keys.length; i++){
    if (i === 0){
    strArr.push(`In your cart, you have ${keys[i]} at $${cart[i][keys[i]]}`)
  }
  else{
    strArr.push(` and ${keys[i]} at $${cart[i][keys[i]]}.`)
  }

  }
var string = strArr.join('');
console.log(string);
}

else if (cart.length > 2){
  keys = [];
  for (var j = 0; j<cart.length; j++){
 keys.push(Object.keys(cart[j]));
}
  for (var i = 0; i < keys.length; i++){
    if (i === 0){
    strArr.push(`In your cart, you have ${keys[i]} at $${cart[i][keys[i]]}`)
  }
  else if (i === keys.length -1){
    strArr.push(`, and ${keys[i]} at $${cart[i][keys[i]]}.`)
  }
  else{
    strArr.push(`, ${keys[i]} at $${cart[i][keys[i]]}`)
  }
  }
var string = strArr.join('');
console.log(string);
}
}

function total() {
    var counter = 0;
  keys = [];
  for (var j = 0; j<cart.length; j++){
 keys.push(Object.keys(cart[j]));
}
for (var i = 0; i < cart.length; i++){
  counter = counter + cart[i][keys[i]];
}
return counter;
}

function removeFromCart(item) {
  var len = cart.length;
  var counter = 0;
 for (var i = 0; i<cart.length; i++){
   if (cart[i].hasOwnProperty(item)){
    cart.splice(i, 1);
  }
  else{
    counter++;
  }
}
if (counter === len){
  console.log("That item is not in your cart.");
  return cart;
}
}

function placeOrder(cardNumber) {
  var statement;
  if (cardNumber === undefined){
       statement = ("Sorry, we don\'t have a credit card on file for you.");
   }
   else{
     statement = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        }
        console.log(statement);
        cart = [];
        return cart;
}
