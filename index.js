var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*100)
 var newItem = {}
  newItem[itemName]=itemPrice
cart.push(newItem)
return (`${itemName} has been added to your cart.`)
}

function viewCart() {
 let i = 0
  var printedArr =[]
  if(cart.length===0){
    return(`Your shopping cart is empty.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  let i = 0
  var printedArr =[]
  if(cart.length===0){
    return(`Your shopping cart is empty.`)
  }
  else if(cart.length< 3){
    for (let i= 0; i<cart.length; i++){
   printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  return (`In your cart, you have ${printedArr.join(" and ")}.`)
  }else{
    for (let i= 0; i<cart.length-1; i++){
      printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    return(`In your cart, you have ${printedArr.join(", ")}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
  }
}
function placeOrder(cardNumber) {
  // write your code here
}
