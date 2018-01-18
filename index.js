var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = (item);
  var itemPrice = Math.floor(Math.random() * Math.floor(101));
  
 item = { [itemName]: itemPrice };
 cart.push(item);
 
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}



function viewCart() {
  var lookCart = [] ;

  //use a for loop to iterate through the cart, and add the item name and price to the arrays
  
  for (var i = 0; i < cart.length; i++) {
    lookCart.push(`${(Object.keys(cart[i])[0])} at $${(Object.values(cart[i])[0])}`)
  }
 
  if (cart.length === 0){
  console.log(`Your shopping cart is empty.`)
  }
   else if (cart.length === 1){
  console.log(`In your cart, you have ${lookCart[0]}.`)
  }
   else if (cart.length === 2){
  console.log(`In your cart, you have ${lookCart[0]} and ${lookCart[1]}.`)
  } 
  
  console.log(`In your cart, you have ${lookCart.slice(0, lookCart.length - 1).join(', ') }, and ${lookCart.slice(-1)}.`)
}


function total() {
  var totalvalue = [];
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
  totalvalue.push(`${(Object.values(cart[i])[0])}`)
  
  sum += parseInt(totalvalue[i]);
  }
  
  return sum;

}

//function removeFromCart(item) {
  //  for (var i = 0; i < 101; i++) {
   //    if ([i] === (Object.values(cart[i])[0])) {
  //    cart.splice(indexOf(Object.values(cart[i])[0]), 1);
         
//        }
//else{
 //     console.log('That item is not in your cart.')
      
//  }
//    }
//}
function removeFromCart(item) {
   // var currItem = cart[i];
    for (var i = 0; i < cart.length; i++) {
       
       var currItem = cart[i];
        
        if (currItem.hasOwnProperty(item)) {
           
            cart.splice(i, 1);
          
            return cart;
        }
    }
    // We looped over the entire cart and never found the item :-(
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  
  // create a varible to hold cc#
  
  //var cardNumberHolder = []
  
  // then add card to var cardNumberHolder 
  
 // cardNumberHolder.push(cardNumber)
  
    // cardNumberHolder.length === 0
  // log `Sorry, we don't have a credit card on file for you.`
  
  if (!cardNumber){     //(cardNumberHolder.length === 0){
  console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  
  // if cardNumber has a cardNumber ie cardNumberHolder.length === 1
  // log Your total cost is $71, which will be charged to the card 83296759
  //.(where 71 is the value returned by total() and 83296759 is the 
  //credit card number passed to placeOrder()
  //empty cart
  
  else {     //if (cardNumberHolder.length === 1){
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
cart.length = 0;
}
