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
 var obj = {}
 var price = Math.floor(Math.random() * 100)
 
 Object.assign(obj,{itemName: item, itemPrice: price})
 cart.push(obj)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here

  if(!cart.length){
    return "Your shopping cart is empty."
  } else {
    var items = []
    
    for(var i in cart){
        var item = cart[i]
        
        for(var key in item){
        items.push(`${key} at $${item[key]}`)
        }
    }
  return `In your cart, you have ${items}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
