var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice = Math.floor(Math.random()*100)
var emptyObject = {}
emptyObject[itemName] = itemPrice
cart.push(emptyObject)
console.log(itemName + " has been added to your cart.")
return cart
}

function viewCart() {
 var itemsandprices = []
 var start = "In your cart, you have";
 for (let i = 0; i < cart.length; i++) {
   var item = Object.keys(cart[i]);
   var price = cart[i][item];
   itemsandprices.push(item + " at $" + price)
 }
 if (cart.length === 0) {
   console.log("Your shopping cart is empty.")
 } else if (cart.length === 1) {
   console.log(`${start} ${itemsandprices}.`)
 } else if (cart.length === 2) {
   var twoitems = itemsandprices.join(" and ")
   console.log(`${start} ${twoitems}.`)
 } else if (cart.length > 2) {
   var beginning = itemsandprices.slice(0,-1).join(", ")
   var end = itemsandprices.slice(-1).join();
   console.log(`${start} ${beginning}, and ${end}.`)
 }
}


function total() {
 var finalprice = 0
 for (let i = 0; i < cart.length; i++) {
   var itemi = Object.keys(cart[i]);
   var pricei = cart[i][itemi];
   finalprice = finalprice + pricei
 }
 return finalprice
}

function removeFromCart(item) {
  let itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
    cart.splice(i,1)
    console.log(cart)
    itemInCart = true
  }
  }
  if (itemInCart === false) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
if (!cardNumber) {
  console.log("Sorry, we don't have a credit card on file for you.");
} else {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
cart = [];
}
