var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){

  var items = []
  var prices = []
  var array = []


   for(var i = 0; i < cart.length; i ++) {
     items.push(Object.keys(cart[i]))
     prices.push(cart[i][items[i]])
     array.push(`${items[i]} at $${prices[i]}`)
   }

   if(cart.length === 0) {
     console.log('Your shopping cart is empty.')
   }

   else {
     var output = ''
     if(array.length === 1) {
       output = array[0]
     }
     if(array.length === 2) {
       output = array.join(" and ")
     }
     if(array.length > 2) {
       var last = array.pop()
       output = array.join(", ")
       output += ', and ' + last
     }
     console.log("In your cart, you have " + output + '.')
   }

  }


function total() {
  var total = 0
  var items = []
  var prices = []

   for(var i = 0; i < cart.length; i ++) {
     items.push(Object.keys(cart[i]))
     prices.push(cart[i][items[i]])
  total += prices[i]}
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i ++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart;
    }
  }
    console.log("That item is not in your cart.")
    return cart
  }

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []}
}
