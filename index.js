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
 cart.push ( {itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length < 1){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1){
     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    let itemsCollected = [];
    for(var i = 0; i < cart.length; i++){
      itemsCollected.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } return  `In your cart, you have${itemsCollected.slice(0,-1)}, and${itemsCollected.slice(-1)}.`;
  }
} 

function total() {
  // write your code here
  	var  jj = 0;
    for(let i = 0; i < cart.length; i++){
      jj+= cart[i].itemPrice	
  } return jj;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i, 1)
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  let jj = total();
  if(cardNumber){
     cart.splice(0, cart.length);
    return `Your total cost is $${jj}, which will be charged to the card ${cardNumber}.`
  } 
  
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
 
}

