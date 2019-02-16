var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
  cart.push(itemObj);
  return itemObj.itemName + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  
 if (cart.length === 1){
   return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice  + "." 
 }
 
  var newArray = []
  
  if (cart.length === 2){
     newArray.push("In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice) 
    return newArray + "."
}
 
 if (cart.length >= 3){  
 for (let i = 0; i < cart.length; i++){
   newArray.push(cart[i].itemName + " at $" + cart[i].itemPrice)
}
 var lastItem = newArray.pop()
 var newLastItem = "and " + lastItem
 newArray.push(newLastItem)
 return "In your cart, you have " + newArray.join(", ") + "." 
 
}}
 
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
