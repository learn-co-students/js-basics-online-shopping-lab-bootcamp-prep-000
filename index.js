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
   var item = {itemName : item, itemPrice : Math.floor(Math.random()*100)};
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;

 }


 function viewCart() {	
  // write your code here	
   if (cart.length > 0) {

     let tempString = [];
    cart.forEach(function(element, index) {

       if (cart.length === 1) {

         tempString.push(`${element.itemName} at $${element.itemPrice}`);

       } else if (cart.length > 1 && index < cart.length -1) {

         tempString.push(`${element.itemName} at $${element.itemPrice}`);
        index++;

       } else if (cart.length > 1 && index === cart.length -1) {

         tempString.push(`and ${element.itemName} at $${element.itemPrice}`);

       }

     });

     return `In your cart, you have ${tempString.join(', ')}.`;

   } else {

     return `Your shopping cart is empty.`;

   }

 }	


 function total() {	
  // write your code here	
   let tempArray = [];

   cart.forEach(function(element){

     tempArray.push(parseInt(element.itemPrice));

   })

   return tempArray.reduce((a, b) => a + b, 0);

 }	


 function removeFromCart(item) {
  // write your code here	
   let index = cart.findIndex(element => element.itemName === item);

   if (index > -1) {

     cart.splice(index, 1);
    return cart;

   } else {

     return `That item is not in your cart.`;

   }

 }


 function placeOrder(cardNumber) {
  // write your code here	
   if (cardNumber) {

     let tempTotal = total();
    cart = [];
    return `Your total cost is $${tempTotal}, which will be charged to the card ${cardNumber}.`

   } else {

     return `Sorry, we don't have a credit card on file for you.`

   }

 }	