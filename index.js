var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = (Math.floor(Math.random() * 100)); //generates random integer between 1 and 100 and sets as price
  cart.push({[item] : itemPrice}) //adds item price and name to cart; turns items into javascript-objects before adding to cart
  console.log(`${item} has been added to your cart.`) //prints string to console that item has been added
  return cart
 }


 // write your code here


function viewCart() {
  // write your code here
  if (!cart.length){
    console.log("Your shopping cart is empty.")
  }
  var itemsAndPrices = [];
 for (var i = 0; i < cart.length; i++) {
   var index = cart[i];
   var item = Object.keys(index)[0];
   var price = index[item];

   itemsAndPrices.push(`${item} at $${price}`)
  }
  if (cart.length === 1) {
          console.log(`In your cart, you have ${itemsAndPrices}.`)
      }else if (cart.length === 2) {
        console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`)
      }else {
        var last = itemsAndPrices.pop()
        console.log(`In your cart, you have ${itemsAndPrices.join(", ")}, and ${last}.`)
      }
  }

function total() {
  // write your code here
  var price = 0
  for (var i = 0; i < cart.length; i++) {
   var index = cart[i];
   var item = Object.keys(index)[0];
   price = price + index[item]
 }
 console.log(price)
 return price
 }


function removeFromCart(item) {
  // write your code here
  var itemCheck = false
   for (var i = 0; i < cart.length; i++) {
    var index = cart[i]
     var inCart = Object.keys(index)[0]
     if (inCart === item) {
       cart.splice(i, 1)
       itemCheck = true
       console.log("Removed from cart")
     }
   }
   if (itemCheck === false) {
      console.log("That item is not in your cart.")
   }
   return cart
  }


function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined'){
console.log("Sorry, we don't have a credit card on file for you.")
} else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
 }
