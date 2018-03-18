var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items = {}
 items.itemName = (item) 
 items.itemPrice = Math.floor(Math.random() * 100 + 1)
 cart.push(items)
 return ((item) + " has been added to your cart.")
}

function viewCart() {
 if(cart.length === 0) {
    return ("Your shopping cart is empty.")
 }  
  else {
    var items = []
    for(var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && i !== 0) {
       items.push("and " + cart[i]["itemName"] + " at $" + cart[i]["itemPrice"])
      }
     else {
      items.push(cart[i]["itemName"] + " at $" + cart[i]["itemPrice"])
      }
}
}
return `In your cart, you have ${items.join(', ')}.`
}
function total() {
  var sum = 0
   for (var i = 0; i < cart.length; i++) {
    sum += cart[i]["itemPrice"]
   }
 return sum 
}

function removeFromCart(item) {
  var rem = []; 
  for(var i = 0; i < cart.length; i++) {
    if(cart[i]["itemName"] === item) {
      rem.push(cart.splice(i, 1))
      }
  }
    if(!rem.length) {
      return ("That item is not in your cart.")
    }
  else {
    return cart
  }    
}


function placeOrder(cardNumber) {
  if(!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.")
  }
  else {
      var sum = 0
   for (var i = 0; i < cart.length; i++) {
    sum += cart[i]["itemPrice"]
   }
    cart.length = 0
    return ("Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".")
  }
}
