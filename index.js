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
 const price = Math.floor((Math.random() * 100)+ 1);
 cart.push({itemName: item, itemPrice: price});
 return (`${item} has been added to your cart.`);
 
}

function viewCart() {
  // write your code here
  var items ="";
  var start = "In your cart, you have "
  if (cart.length === 0){
    return ('Your shopping cart is empty.')
  }
  else if(cart.length === 1){
    return (`${start}${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  else if(cart.length === 2){
    return (`${start}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  else {
    
    for(let i = 0; i<cart.length - 1; i++){
      items +=`${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }    
    return (`${start}${items}and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`);  
  }
  
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i=0; i<cart.length; i++){ 
    totalPrice += Math.floor(cart[i].itemPrice);
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  
  for(var i=0; i<cart.length; i++){
    //console.log(cart[i].itemName)
    if (item === cart[i].itemName){
      cart.splice(i, 1);
      return cart;
    }
  }
      return "That item is not in your cart."    
 
}
  
  

function placeOrder(cardNumber) {
  // write your code here
  var totalPriceItem = total();
  console.log(totalPriceItem)
  if(!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.")
  }
   else{
    cart = [];
    return(`Your total cost is $${totalPriceItem}, which will be charged to the card ${cardNumber}.`)
    
}
}