var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var object = {[itemName]:itemPrice};
 cart.push(object);
 console.log (`${itemName} has been added to your cart.`);
 return cart
}
addToCart("bananas")
addToCart("oranges")
addToCart("cheese")
addToCart("pear")



   function viewCart() {
    var i = 0;
    var emptyArray=[];
    for (i=0; i < cart.length; i++){
      emptyArray.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)}
  if (cart.length > 2) {
       console.log ("In your cart, you have"+ emptyArray.slice(0, emptyArray.length - 2)+ "," + emptyArray[cart.length - 2] + ", and" + emptyArray[cart.length-1]+ ".")
  } else if (cart.length > 1){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
    
  } else if (cart.length > 0){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
    } else {
      console.log ('Your shopping cart is empty.')
    }
  }
  
 
 /* function viewCart() {
    var i = 0;
  if (cart.length > 1) {
    
    for (i=0; i < cart.length - 1; i++){
     x = (`${Object.keys(cart[i])} at ${Object.values(cart[i])}, `) }
     console.log ('In your cart, you have'+ x + )
    console.log (`and ${Object.keys(cart[cart.length - 1])} at ${Object.values(cart[cart.length - 1])}.`) 
  } else if (cart.length > 0){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
    } else {
      console.log ('Your shopping cart is empty.')
    }
  }
*/
function total() {
  var x = 0
  var i = 0
  for (i=0; i < cart.length; i++){
   x = x + parseInt(Object.values(cart[i]))
  }
  return x
}
total()
console.log(total())

 function removeFromCart(item) {
  var itemFound = false;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
     cart.splice(i,1);
     itemFound = true;
     return cart
   } 
  }
  if (!itemFound){
    console.log ("That item is not in your cart.")
     return cart
    }
}



function placeOrder(cardNumber) {
   
  if (cardNumber === undefined) {
    console.log ("Sorry, we don't have a credit card on file for you.")
  } else { 
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = 0
    
}
}