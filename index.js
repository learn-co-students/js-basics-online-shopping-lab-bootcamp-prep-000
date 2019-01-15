var cart = [];
function getCart(name) {
  return cart ;
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 // write your code here
 var itemName = name;
 var object= { itemName: name , itemPrice: Math.floor(Math.random() * (100 - 1 + 1 )) + 1 } ;
  getCart().push(object) ;
 return `${itemName} has been added to your cart.`;
}
  
function viewCart() {
  // write your code here
  var viewString = "In your cart, you have " ;
  var itemNamesArray = Object.keys(getCart());
  var itemPricesArray = Object.values(getCart());
//return `In your cart, you have ${itemNamesArray[0]} at $${itemPricesArray[0]}.`;

  if(getCart().length === 0){
    return 'Your shopping cart is empty.';
  }
  else if( getCart().length ===1 ){
  for(let i=0 ; i<getCart().length ; i++){
    viewString += itemName[i] + " at $" + itemPrice[i] + ", " ;
      }
      return viewString;
  }
  else if(getCart().length === 2){
    for(let i=0 ; i<getCart().length ; i++){
    viewString += itemName[i] + " at $" + itemPrice[i] + ", " ;
      }
      return viewString;
  }
  else{
    for(let i=0 ; i<getCart().length ; i++){
    viewString += itemName[i] + " at $" + itemPrice[i] + ", " ;
          }
      return viewString;
      }
}
  
/*
 else if (getCart().length === 1){
    //addToCart(1);
    //setCart();
    //while(i < getCart.length){
    var itemNamesArray = Object.keys(getCart());
    var itemPricesArray = Object.values(getCart());
    return `In your cart, you have ${itemNamesArray[0]} at $${itemPricesArray[0]}.`;
  }
  */


  

function total() {
  // write your code here
  for(let i=0 ; i<cart.length ; i++){
     var totalPrice
     totalPrice += itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for(let i=0 ; i<cart.length ; i++){
    if(itemName===item){
      delete cart.item 
      return cart
    }
    else {
      return "That item is not in your cart"
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===''){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    return `"Your total cost is ${total()}, which will be charged to the card ${placeOrder()}."`
  }
}
