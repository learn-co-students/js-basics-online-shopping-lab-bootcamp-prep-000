// function currentLine(line) {
//   var katzDeli = []; 
//   if (line.length === 0) { return "The line is currently empty."; } 
//   for (var i = 0; i < line.length; i++) {
//     katzDeli.push(` ${i + 1}. ${line[i]}`); }
//   return `The line is currently:${katzDeli}`;   
// } 

// const playlist = {artistName: 'songTitle'}; 

// function updatePlaylist(playlist, artistName, songTitle) {
//   playlist[artistName] = songTitle 
//   return playlist
//  }

//     function createArray(item_object, itemName, itemPrice) {
//       item_object[itemName] = item 
//       item_object[itemPrice] = price[i]
//       return item_object
//   }

// var cart = {itemName: "ice cream", itemPrice: "47"} 


var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1); 
  var item_object = {};  
  item_object = {itemName : item, itemPrice : price}; 
  item_object[item] = price;
  cart.push(item_object); 
return `${item} has been added to your cart.`;  
}


function viewCart() {
  if (cart.length === 0) { return `Your shopping cart is empty.`; }  
    for (var i = 0; i < cart.length; i++) {
  if (cart.length >= 3) { return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`}    
  else if (cart.length >= 2) { return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.` } 
  else (cart.length === 1) ; { return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.` }  
} 
}

function total() {
  var sum = 0; 
    for (var i = 0; i< cart.length; i++) {
   sum += cart[i].itemPrice; 
    }
  return sum 
}

// The removeFromCart() function accepts one argument, the name of the item that should be removed.
// If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
// HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be   

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    while (cart[i].itemName === item) { 
   var removeItem = cart.splice(i, 1);  
  return cart; 
}
} 
 return "That item is not in your cart." ; 
}
   
   
   
function placeOrder(cardNumber) {
  var cartTotal = total();  
if (cardNumber === undefined) { return "Sorry, we don't have a credit card on file for you." } 
 else { cart.splice(0, cart.length); return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`; } 
}
