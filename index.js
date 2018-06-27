var cart = [];

addToCart("Bananas")
addToCart("Banan0s")
addToCart("BananUs")

console.log(placeOrder(83296759))

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice=Math.floor(Math.random()*100)
var newObj={
  ['itemName']:itemName,
  ['itemPrice']:itemPrice
}
cart.push(newObj)
var ans=`${itemName} has been added to your cart.`
return ans
}

function viewCart() {
var ans
if(cart.length===0){
  ans='Your shopping cart is empty.'
  return ans
}else{
  ans ='In your cart, you have'
  for (let i=0;i<cart.length;i++){
    if (i===cart.length-1){
        ans+=` ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }else if (i===cart.length-2){ 
              ans+=` ${cart[i].itemName} at $${cart[i].itemPrice}, and`
            }else {
              ans+=` ${cart[i].itemName} at $${cart[i].itemPrice},`}
  }
}
return ans
}

function total() {
var sum=0;
  for(let i=0;i<cart.length;i++){

    sum+=cart[i].itemPrice
  }
return sum
}

function removeFromCart(item) {
  var ogCartLength=cart.length
  var ans;
  for(let i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
      cart.splice(i,1)
    }
  }
  
if(ogCartLength===cart.length){
   ans='That item is not in your cart.'
  
}else{
  ans=cart
  }
return ans
}

function placeOrder(cardNumber) {
  var ans;
 if(isNaN(cardNumber)){
   ans="Sorry, we don't have a credit card on file for you."
 }else{
   var tot=total()
 ans=`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`  
 cart=[];
 }
 
 return ans
}
