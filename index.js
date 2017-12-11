var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random()*100)+1);
  var itemName = item; 
  cart.push({[itemName]: itemPrice})
  console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
 
if (cart.length < 1) {
  console.log("Your shopping cart is empty.")}
  
else if  (cart.length == 1) {
  console.log(`In your cart, you have ${Object.keys(cart)[0][0]} at $${cart[Object.keys(cart)[(0)][(0)]]}.` )}

  
else if (cart.length > 1) {
  
  var itemsListed = []; 
  for (var i = 0; i < cart.length; i++) {
    itemsListed.push(`${Object.keys(cart)[i][i]} at $${cart[Object.keys(cart)[i][i]]}`) }
    
  var lastItem = `, and ${Object.keys(cart)[cart.length - 1][cart.length - 1]} at ${cart[Object.keys(cart)[(cart.length - 1)][(cart.length - 1)]]}.`
  
console.log(`in your cart, you have ${itemsListed} ${lastItem}`)}
}


    
    

 
 
 
 
 
 
 
 
 
 // and ${object.keys(cart)[-1][-1]} at $${cart[object.keys(cart)[-1][-1]]}.`)
//   }
 
// if (cart.length > 1) {
   
// }}
 
//  var pullFirstKey = Object.keys(cart[0])[0]
//   var pullFirstValue = cart[0][pullFirstKey];
// var openingSentence = "In your cart, you have"
// var lastItemKey = Object.keys(cart[(cart.slice(-1))])[(cart.slice(-1))]
// var lastItemValue = cart[(cart.slice(-1))][Object.keys(cart[(cart.slice(-1))])[(cart.slice(-1))]]

// //  cart is empty
// if (cart.length < 1) {
//   console.log ('Your shopping cart is empty.')
// }
// //cart has exactly one item
// else if (cart.length === 1) {console.log('${openingSentence}.'}
// // cart has exactly two items
// else if (cart.length === 2)
//     {return (openingSecntenceTwoItems + ".")}
// //cart has 3 items
// else if (cart.length === 3)
//     {return (openingSentenceThreeitems + ".")}
// //cart has more than 3 items

// else  {(cart.length > 2)
//   for (var i = 2; i<(cart.length - 1); i++)
//   var cartItems = itemName[i] + " at $" itemPrice[i] + ", "
//   var lastItem =  "and " + itemName[cart.length] + " at $" + itemPrice[cart.length] + "."
//     {return (openingSentence + " " cartItems[i] + lastItem
// }

// //function viewCart() {
//   // var pullFirstKey = Object.keys(cart[0])[0];
//   //var pullFirstValue = cart[0][pullFirstKey];
//   //var pullSecondKey = Object.keys(cart[1])[1]
// //  var pullSecondValue = cart[1][(Object.keys(cart[1])[1])];
// // var openingSentenceOneItem = "In your cart, you have"+ pullFirstKey + " at " + pullFirstValue;
// // var openingSentenceTwoItems = openingSentenceOneItem + " and " + pullSecondKey + " at " + pullSecondValue;
// // var openingSentenceThreeitems =  openingSentenceOneItem + ", " + pullSecondKey + " at " + pullSecondValue + ", and" + Object.keys(cart[2])[2] + cart[2][Object.keys(cart[2])[2]]
// // var lastItemKey = Object.keys(cart[(cart.slice(-1))])[(cart.slice(-1))]
// //var lastItemValue = cart[(cart.slice(-1))][Object.keys(cart[(cart.slice(-1))])[(cart.slice(-1))]]
// //

// //  cart is empty
// //  if (cart.length  === 0 ) {
//   //  console.log('Your shopping cart is empty.')}

// //cart has exactly one item
// //  else (cart.length === 1) {
//   //  var firstItem = cart[0]
//   //  console.log(`In your cart, you have ${firstItem} at .`)
// //  }
// //}

// // cart has exactly two items
//   //else if (cart.length === 2)
//     //{return (openingSentenceTwoItems + ".")}

// //cart has 3 items
// //  else if (cart.length === 3)
//   //  {return (openingSentenceThreeitems + ".")}

// //cart has more than 3 items//
// //else  {(cart.length > 3)
//   //for (var i = 3; i<(cart.length - 1); i++)
//     //{return (openingSentenceOneItem + ", " + Object.keys(cart[i])[i] + cart[i][Object.keys(cart[i])[i]] + ", and " + lastItemKey + "at " + lastItemValue  + ".") }}
// //}

// function total() {
//   // write your code here
// }

// function removeFromCart(item) {
//   // write your code here
// }

// function placeOrder(cardNumber) {
//   // write your code here
// }
