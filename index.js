var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var item = {};
  cart.push(item)
  item.itemName = `${itemName}`
  function price(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   item.itemPrice = price(1,100);
  return `${itemName} has been added to your cart.`

}

function viewCart() {
  if(cart.length===0) {
    return `Your shopping cart is empty.`
  }
  for(let i = 0; i < cart.length; i++) {
    if(cart.length===1){
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else if(cart.length===2){
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
    }
    else{
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}, and ${cart[i+2].itemName} at $${cart[i+2].itemPrice}.`
    }
  }
}

function total() {
   for(let i = 0; i < cart.length; i++) {
     if(cart.length===1) {
       return cart[i].itemPrice
    }else if(cart.length===2) {
       return cart[i].itemPrice+cart[i+1].itemPrice
   }else{
     return cart[i].itemPrice+cart[i+1].itemPrice+cart[i+2].itemPrice
     }
   }
}

function removeFromCart(itemName) {
 for(let i = 0; i < getCart().length; i++) {
   if(cart[i].itemName === itemName) {
       cart.splice( i ,1)
       return cart
   }
 }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var sumTotal= total()
  cart.length=0;
  if(cardNumber===undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    return `Your total cost is $${sumTotal}, which will be charged to the card ${cardNumber}.`
  }
   
}
