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
 var list = Math.floor(Math.random()*100 +1);
 cart.push({[item]:list})
 return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }

  var items = [];
  for(i=0; i< cart.length; i++){
  for(var item in cart[i]){
    items.push(item + "at $" + cart[i][item])
  }
  }
  console.log("In your cart, you have " + items.join(", ") + ".");


}
 
function total() {
 var sum = sumUpPrices()
  return sum
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
   if(!itemInCart){
    return "That item is not in your cart."
  }
  return cart;
}
  

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
     return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` 
    cart=[];
  }
   
}
 
