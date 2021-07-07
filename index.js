var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(newItem)
 return newItem.itemName+` has been added to your cart.`
}


function viewCart() {
  if (cart.length === 0) {
  return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return (`In your cart, you have `+cart[0].itemName+` at $`+cart[0].itemPrice+`.`)
  } else {
    var cartItems = []
    var x = 0
    for (x = 0; x < cart.length-1; x++) {
    cartItems.push(` `+cart[x].itemName+` at $`+cart[x].itemPrice)
    }
    cartItems.push(` and `+cart[(cart.length)-1].itemName+` at $`+cart[(cart.length)-1].itemPrice+`.`)
    cartItems.join()
    return `In your cart, you have`+cartItems
  }
}

function total() {
  var totalCost = 0
  var x = 0
   while (x < cart.length) {
     totalCost = totalCost + cart[x].itemPrice
     x++
   }
   return totalCost
}


function removeFromCart(item) {
  var updatedCart = 0
  var x = 0
   for (x = 0 ; x < cart.length ; x++) {
     if (cart[x].itemName === item) {
     cart.splice(x, 1)
     updatedCart = cart
     return cart
     }
   }
   if (updatedCart === 0) {
     return `That item is not in your cart.`
   }
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var finalCost = total()
    cart = []
    return `Your total cost is $`+finalCost+`, which will be charged to the card `+cardNumber+`.`
  }
}