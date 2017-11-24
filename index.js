var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var p = Math.floor(Math.random()*100);
 var newItem = {[item]: p};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {

if (cart.length > 0){
  
  var key1 = Object.keys(cart[0])
  
  var sentence = ""
  
if (cart.length === 1){
   
   var a = Object.keys(cart[0])
    sentence = `In your cart, you have ${a} at $${cart[0][a]}.`
}


 if (cart.length === 2){
    var key2 = Object.keys(cart[1])
    sentence = `In your cart, you have ${key1} at $${cart[0][key1]} and ${key2} at $${cart[1][key2]}.`
}

 if (cart.length > 2){
   var b = Object.keys(cart[1])
   
   sentence = `In your cart, you have ${key1} at $${cart[0][key1]}, ${b} at $${cart[1][b]}, `
   
   for (var i = 2; i < cart.length - 1; i++){
   var currentKey = Object.keys(cart[i]);
   var currentPrice = cart[i][currentKey]
   
   sentence += `${currentKey} at $${currentPrice}, `
  
}

var final = cart.length
var finalKey = Object.keys(cart[final - 1]);
   var finalPrice = cart[final - 1][finalKey]
sentence += `and ${finalKey} at $${finalPrice}.`

}

console.log(sentence)

}

else{
  console.log("Your shopping cart is empty.")
}

}



function total(){
var sum = 0;
    for (var i = 0; i < cart.length; i++){
      
        sum += cart[i][Object.keys(cart[i])]
    }
    return sum;

}



function removeFromCart(item) {
 var valid = false
 for (var i = 0; i < cart.length; i++){
   
   if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
     valid = true
   }
 }
 if (valid === false){
   console.log('That item is not in your cart.')
 }
}

function placeOrder(cardNumber) {
 
 if (!cardNumber){
   console.log(`Sorry, we don't have a credit card on file for you.`)
 }
   else {
    
    var sum = 0;
    for (var i = 0; i < cart.length; i++){
      
        sum += cart[i][Object.keys(cart[i])]
    }
    
     console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
     while(cart.length > 0){
       cart.pop()
   }
 }
 }

