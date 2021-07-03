var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    cart.push({[item]: Math.floor(Math.random()*100)})
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
if (cart.length === 0){console.log('Your shopping cart is empty.')}

else if (cart.length === 1){console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)}

else if (cart.length===2){console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)}

else {
  // Create empty string var to house items and prices
  let itemStr = '';
  
  //Loop over items in cart
     for (let i = 0; i < cart.length ; i++){
       
      // For each item add the string "item at $amt" separated by a comma and space
      // The last item gets a period instead of a comma
      // The second to last item has an "and" added
      itemStr = itemStr + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i < cart.length - 1 ? ', ': '.'}${i === cart.length - 2 ? 'and ': ''}`;
     }
     // Log the sting below with the item string added.
       console.log(`In your cart, you have ${itemStr}`);
}
}

  




 


function total() {
 
 var tot = 0; 
 for (var i = 0; i <cart.length; i++){
 tot += cart[i][Object.keys(cart[i])]}
 return tot;

}

function removeFromCart(item) {
 let itemInCart = false;
 
   for (let i = 0, l = cart.length; i < l; i++) {
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true;
       cart = cart.slice(0, i).concat(cart.slice(i + 1));
       l--;
     }
   }
 
   if (!itemInCart) {
     console.log("That item is not in your cart.");
   }
 
   return cart;}
function placeOrder(cardNumber) {
  if (!cardNumber) {console.log("Sorry, we don\'t have a credit card on file for you.")} 
  else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
   cart= []}