var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var beg = "In your cart, you have ";
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length  === 1){
    return `${beg}${cart[0].itemName} at $${cart[0].itemPrice}.`
  } 
  else if (cart.length === 2) {
    
    for (let i = 0; i < cart.length -1; i++) {
    beg += `${cart[i].itemName} at $${cart[i].itemPrice},`

     for (let i = cart.length - 1; i < cart.length; i++) {
      beg += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
 } 
 return beg
}
   else if (cart.length > 2) {
      
     // for (let i = 0; i < cart.length; i++) {
    beg += `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.` 

     /* for (let i = cart.length - 1; i < cart.length; i++) {
      beg += ` and ${cart[2].itemName} at $${cart[2].itemPrice}.`} */
 // } 
   return beg
 }
}

function total() {
 var sumPrice = []
 function getSum(total, num) {
   return total + num
 }
  for (let i = 0; i < cart.length; i++) {
    sumPrice.push(cart[i].itemPrice)
  }
  return sumPrice.reduce(getSum)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
  
 if (cart[i].itemName === item) {
   cart.splice(i, 1);
    return getCart() }
 }
   return "That item is not in your cart.";
}

 function placeOrder(cardNumber) {
    
   if (cardNumber) {
    var totalCost = total();
     cart = [];
      return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;}
      
   else { 
     return "Sorry, we don\'t have a credit card on file for you.";}
} 






