var cart = {};
var item =[]
var cartobject={}
var price=[]
var item1

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item1) {
var price1
price1=Math.floor(Math.random()*1000)
price.push(price1)
item.push(item1)
var cartobject= {itemName:item1, itemPrice:price1}
cart.assign(cartobject)
return `${item} has been added to your cart.`

}

function viewCart() {
 var i
 if (!cart.length){
   return "Your shopping cart is empty"
 }
 else{
 for(i=0; i<cart.length; i++){
   return `In your cart, you have ${item[i]} at ${price}`
 }
 
}
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
