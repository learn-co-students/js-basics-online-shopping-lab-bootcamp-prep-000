var cart = [];
var itemNamePrice = new Object({}); 
var cartitems = "";

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*100)
 var NewCartItem = {}
 NewCartItem[item] = itemPrice
 if (cart[0] === "") {
   cart.splice(0,1,NewCartItem)
 } else{
 cart.push(NewCartItem)
 }
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  var cartitems = ""
  if (cart.length === 0 ) {
    console.log("Your shopping cart is empty.")
  }
  for (var i=0; i<cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item];
    if (i != cart.length-1) {
      cartitems = cartitems + " " + item + " at $" + itemPrice + ","
      if (cart.length == 2) {
        cartitems = cartitems.slice(0,-1)
      }
    } else {
      cartitems = " " + cartitems + " and " + item + " at $" + itemPrice + "."
    }
  }
  if (cart.length ==1 ) {
    console.log(`In your cart, you have${cartitems.slice(5, cartitems.length)}`)
  } else{
  console.log(`In your cart, you have${cartitems.slice(1, cartitems.length)}`)
  }
}

function total() {
  var sum = 0;
  for (var j=0; j<cart.length; j++) {
    var item = Object.keys(cart[j])[0]
    var itemPrice = cart[j][item];
    sum = sum + itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var food; 
  for (food in cart) {
    if (item == Object.keys(cart[food])) {
      cart.splice(food,1)
      return cart
    }
    }
  console.log("That item is not in your cart.")
  return cart
}
 
  
function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return cart
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
  }

