var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor((Math.random())*101);
 var staff = {[itemName]: itemPrice};
 cart.push(staff);
console.log(`${itemName} has been added to your cart.`);
return cart;
 }

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var newCart = [];
    for (var i = 0; i<cart.length; i++) {
      if (cart.length === 1){
        console.log(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
      } else {
        if(cart.length === 2){
          console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
        } else{
          if (i === cart.length - 1){
        var lastElement = `, and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
          } else {
            newCart.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
          }
          }
      }
    }
  }
  if (cart.length > 2){
    newCart.join(', ');
    console.log(`In your cart, you have${newCart}${lastElement}`);
  }
}
    
    
      
      
       

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i<cart.length; i++){
    totalCost += parseInt(Object.values(cart[i]));
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
 for (var i =0; i<cart.length; i++){
   
   if (cart[i].hasOwnProperty(item)){
     cart.splice(i,1);
     return cart;
    } 
   
 }
 console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = cart.splice();
    return cart;
  }
}
