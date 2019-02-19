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
 var totalPrice = 0
  for (let i = 0; i < cart.length; i++){
  totalPrice += cart[i].itemPrice
}
return totalPrice
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === 'item'){
      cart.splice([i], 'item')
      return cart
       }
    }  
 
    return "That item is not in your cart."
  }

function placeOrder(cardNumber) {
  if (cardNumber){
    return "Your total cost is $" + `${total()}` + ", which will be charged to the card " + `${cardNumber}` + "."
  }
  else
  
  return "Sorry, we don't have a credit card on file for you."
  }
