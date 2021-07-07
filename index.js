var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  Math.floor(Math.random() * 100) + 1; 
  var newItem = {itemName:item, itemPrice: Math.floor(Math.random() * 100) + 1 }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}


function viewCart() {
if (cart.length === 0) {
    return ("Your shopping cart is empty.")
  } 
var aa = 'In your cart, you have '
var cc = ' at $'
var dd = 'and '
if ( cart.length ===1)
return aa + cart[0].itemName + cc + cart[0].itemPrice + '.'

for (let i = 0; i< cart.length ; i++){
if (i === cart.length-1){
  aa += dd + cart[i].itemName +cc + cart[i].itemPrice +'.' 
  
}
else aa +=  cart[i].itemName + cc + cart[i].itemPrice + ', '

}
return aa

}   

function total(item) {
   let cost = 0
   for (let i = 0; cart.length > i; i++){
   
    cost += cart[i].itemPrice
   }
     return cost
}

function removeFromCart(item){
let iteminCart = false
for (let i = 0; cart.length > i; i++)
if (cart[i].itemName === item){
cart.splice(i, 1)
return cart
}

if (false === iteminCart)
return "That item is not in your cart."
}

function placeOrder(cardNumber){
var zzz = "Sorry, we don't have a credit card on file for you."
var xxx = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
if(cardNumber) {
   setCart([]);
 return xxx
  }

else
{return zzz }
}


