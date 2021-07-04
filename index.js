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
  console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)}
  
else if  (cart.length == 2) {
  console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)}

  
else if (cart.length > 2) {
  var twoLastItems = `${Object.keys(cart[cart.length - 2])[0]} at $${cart[cart.length - 2][Object.keys(cart[cart.length - 2])[0]]}, and ${Object.keys(cart[cart.length - 1])[0]} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])[0]]}.`
      var itemsLooped = ``;
      for (var i = 0; i < cart.length - 2; i++) {
       itemsLooped += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `;}
   
      console.log(`In your cart, you have ${itemsLooped}${twoLastItems}`)}
}


function total() {
  var totaledPrice = 0
  for (var i = 0; i < cart.length; i++) {
  totaledPrice += cart[i][Object.keys(cart[i])[0]]
  }
  return totaledPrice
}

function removeFromCart(crappyItem) {
var itemsArray = []
for (var i = 0; i < cart.length; i++) {
itemsArray.push(Object.keys(cart[i])[0])
}


if (itemsArray.includes(crappyItem)) {
  var x = itemsArray.indexOf(crappyItem)
 	cart.splice(x, 1)
  return cart
}
  
else {
console.log("That item is not in your cart.")
return cart
  }
}

function placeOrder(creditCard) {
var x = creditcard 
if (x === "") { 
  console.log("Sorry, we don't have a credit card on file for you..")}

else {
var runTotal = total();
console.log(`Your total cost is $${runTotal}, which will be charged to the card ${creditCard}`)
}

}


function placeOrder(creditCard) {
 
if (creditCard === undefined) { 
  console.log("Sorry, we don\'t have a credit card on file for you.")}

else {
var runTotal = total();
console.log(`Your total cost is $${runTotal}, which will be charged to the card ${creditCard}.`)
cart.length = 0
}

}


 
//The removeFromCart() function accepts one argument, the name of the item that should be removed.
// If the cart does not contain a matching item, the function should print out That item is not in your cart. and return the unchanged cart.
// If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
// HINT: Check each object's key (the name of the item) to see if it matches the parameter, then remove it if it matches. You might find hasOwnProperty to be useful.

















// else if (cart.length > 1) {
  
 
//   for (var i = 0; i < cart.length; i++) {
//     itemsListed.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
    
//   var lastItem = `, and ${Object.keys(cart[cart.length - 1])[0]} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])[0]]}.`
  
// console.log(`In your cart, you have ${itemsListed} ${lastItem}`)}
// }}


// tested version
// function test() {
// var cart =  [{"bananas":"68"}, {"apples": "32"}, {"tomatoes": "42"}, {"lettuce": "51"}];
// var itemsListed = []; 
//   for (var i = 0; i < cart.length; i++) {
//     itemsListed.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
//   }
  
//   console.log(itemsListed)
// }

// test()
    

 


//else if (cart.length > 1) {
  
//   var itemsListed = []; 
//   for (var i = 0; i < cart.length; i++) {
//     itemsListed.push(`${Object.keys(cart[i])[i]} at $${cart[0][Object.keys(cart[i])[i]]}`) }
    
//   var lastItem = `, and ${Object.keys(cart[cart.length - 1])[0]} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])[0]]}.`
  
// console.log(`In your cart, you have ${itemsListed} ${lastItem}`)}
// }


    
    
 
 
 
 
 
 