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
 var price = Math.floor(100*(Math.random()))
 var itemObject = {itemName: item, itemPrice: price  }
 cart.push(itemObject);
 
 console.log(`${item} has been added to your cart.`)
 return (`${item} has been added to your cart.`);
}

addToCart('Beans');
addToCart('Eggs');
addToCart('Rice');
addToCart('Meat');
addToCart('Potatoes');


function viewCart() {
  // write your code here
  
var inCart = []
var cartString = "In your cart, you have "

for (var i = 0; i < cart.length; i++){
         
        inCart.push(cart[i].itemName + " at $" + cart[i].itemPrice)
}
  
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
    return ("Your shopping cart is empty.")
  }
  else if (cart.length === 1){
    console.log("Your shopping cart contains items.")
    cartString += inCart +"."
    console.log(cartString)
    return cartString
    
  }
  else if (cart.length === 2){
    console.log("Your shopping cart contains 2 items.")
    cartString += inCart[0] + ", and " + inCart[1] + "."
    console.log(cartString)
    return cartString
  }
  else if (cart.length > 1){
    console.log("Your cart contains three or more items")
    var lastItem = inCart.pop()
    var stringItem = inCart.join(", ")
    cartString += stringItem + ", and " + lastItem + "."
    console.log(cartString)
    return cartString
  }
  

}
viewCart();

function total() {
  // write your code here
  var priceTotal = 0
  for (var i = 0; i < cart.length; i++){
    priceTotal+=cart[i].itemPrice
  }
  console.log("Your price total is $" + priceTotal + ".")
  return priceTotal
}

total();
var myTotal = total()

function removeFromCart(item) {
  
  var testItem = 0
  
  
  for (var i = 0; i < cart.length; i++){
    testItem = cart[i].itemName
    console.log(testItem)
  
  
  if (item === testItem){
    console.log(testItem)
    cart.splice(i, 1)
    console.log(cart)
    return cart;
  } 
}
  return "That item is not in your cart."
}

removeFromCart();
removeFromCart('Potatoes');


/* 
4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    + ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
    + If the cart does not contain a matching item, the function should return `That item is not in your cart.`
*/

function placeOrder(cardNumber) {
  
  if (cardNumber){
    
    console.log ("Your total cost is $" + myTotal + ", which will be charged to the card " +  cardNumber + ".")
    
    cart = [];
    
    return ("Your total cost is $" + myTotal + ", which will be charged to the card " +  cardNumber + ".")
  } else {
    
    return ("Sorry, we don't have a credit card on file for you.")
  }
}
console.log(myTotal)
placeOrder()
placeOrder(83296759)