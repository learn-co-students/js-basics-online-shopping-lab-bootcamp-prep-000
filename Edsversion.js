// function viewCart() {
//   var numberOfItems = cart.length
//
//
//  if (numberOfItems === 0) {
//    console.log(`Your shopping cart is empty.`);
//  }
//
//  var midStatement = [];
//
//  for (var i = 0; i < numberOfItems; i++) {
//    midStatement.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
//  }
//
//  switch(cart.length){
//    case(1):
//      console.log(`In your cart, you have ${midStatement[0]}.`);
//      break;
//   case(2):
//     console.log(`In your cart, you have ${midStatement[0]} and ${midStatement[1]}.`);
//     break;
//   default:
//     console.log(`In your cart, you have ${midStatement.slice(0,-1).join(", ")}, and ${midStatement[midStatement.length-1]}.`);
//
//  }
//  return cart;
// }
//

// removed the numberOfItem variable
var cart = []

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100 +1)
  var itemObject ={
    [itemName] : itemPrice
  }
  cart.push(itemObject)
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
 if (cart.length === 0) {
   console.log(`Your shopping cart is empty.`);
 }

 var midStatement = [];

 for (var i = 0; i < cart.length; i++) {
//   midStatement.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
  midStatement =`${Object.keys(cart[i])} at $${Object.values(cart[i])}`
 }

 switch(cart.length){
   case(1):
     console.log(`In your cart, you have ${midStatement[0]}.`);
     break;
  case(2):
    console.log(`In your cart, you have ${midStatement[0]} and ${midStatement[1]}.`);
    break;
  default:
    console.log(`In your cart, you have ${midStatement.slice(0,-1).join(", ")}, and ${midStatement[midStatement.length-1]}.`);

 }
 return cart;
}


addToCart(`itemTest1`)
addToCart(`itemTest2`)
addToCart(`itemTest3`)
addToCart(`itemTest4`)
console.log(cart);
viewCart()
