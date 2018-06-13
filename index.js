var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code hereaaa

 cart.push({itemName: itemName, itemPrice:Math.floor((Math.random() *100) +1)})
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var arr = [];
  var backUp = cart;
  if(cart.length>0){
    for(var i = 0; i<cart.length; i++) {
      if(i===0 && cart.length===1){
        arr.push(`In your cart, you have ${backUp.shift().itemName} at ${backUp.shift().itemPrice}.`)
      }
      else if(i===0 && cart.length>1){
        arr.push(`In your cart, you have ${backUp.shift().itemName} at ${backUp.shift().itemPrice},`)
      }
      else if(i===cart.length - 1){
        arr.push(`${backUp.shift().itemName} at ${backUp.shift().itemPrice}.`)
      }
      else{
        arr.push(`${itemName} at ${itemPrice},`)
      }
    }
  }
  else {
    return "Your shopping cart is empty."
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
