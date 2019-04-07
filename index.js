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
 cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var printCart = []
   if (!cart.length)
 return "Your shopping cart is empty.";
 else{
   for(var i=0;i<cart.length;i++){
     if (i===0){
     printCart[i] = `${cart[i].itemName} at $${cart[i].itemPrice}`
     }
       else if(i===(cart.length - 1)){
         printCart[i] = ` and ${cart[i].itemName} at $${cart[i].itemPrice}`
       }
       else{
         printCart[i] = ` ${cart[i].itemName} at $${cart[i].itemPrice}`
       }
     }
     return "In your cart, you have " + printCart + "."
   }
}

function total() {
  // write your code here
  var sum = 0
  for(var i=0;i<cart.length;i++){
    sum=sum+cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var deletedItems = 0
  for(var i=0;i<cart.length;i++){
    if(item===cart[i].itemName){
      cart.splice([i],1)
      deletedItems+=deletedItems
    }
    }
    if (deletedItems===0){
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return  "Sorry, we don't have a credit card on file for you."
  }
  else if(isNaN(Number.parseInt(cardNumber))){
    return  "Not a Credit Card."
  }
  else{
    var summation = total()
    cart.length=0
    return `Your total cost is $${summation}, which will be charged to the card ${cardNumber}.`
     
  }
}
