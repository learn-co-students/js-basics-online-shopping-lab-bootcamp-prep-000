var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min
 
  var objecto = {
     itemName: item,
     itemPrice: random
   }
   
   cart.push(objecto)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
 
   
  } else if (cart.length === 1){
   
    return `In your cart, you have ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  } else if (cart.length > 1){
    var cartItems = []
   
   var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
   
    for(var i = 0; i < cart.length - 1; i++){
       cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
  }
}

function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (cardNumber){
    let totalCost = total();
    cart =[];
    return`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}