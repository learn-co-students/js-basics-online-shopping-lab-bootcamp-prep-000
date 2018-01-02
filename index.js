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
 var itemPrice = Math.floor(Math.random() * 100)
 var newItem = {[item]: itemPrice}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
  var text = "In your cart, you have"
  if (cart[0] === undefined) {
  
    console.log(`Your shopping cart is empty.`)
  }
  
  if (cart.length === 1) {
  
    console.log(`${text} ${Object.keys(cart[0])} at $${Object.values(cart[0])}.` )
  }
  
  if (cart.length === 2) {
  
    console.log(`${text} ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  }
  
  else if (cart.length > 2) { 
    var sentence = []
    for (let i = 0; i < cart.length; i++) {
  
      if (i === cart.length - 1) {
        sentence.push(`and ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)}
  
      else {
        sentence.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
        
      }
     
    }
    console.log (`${text} ${sentence.join(', ')}.`)
  }
}

function total() {
//  write your code here
var Total =[]
for (let i = 0; i < cart.length; i++)
  {
    Total.push(parseInt(Object.values(cart[i])))
  }
  function getSum(total, num) {
    return total + num;
  }
  return Total.reduce(getSum)
}

function removeFromCart(item) {
  // write your code here
 for (i = 0; i<cart.length; i++)
 if (cart.hasOwnProperty(item))
  cart.splice(i,1)
if (i === cart.length - 1)
  return `That item is not in your cart.` 
}

function placeOrder(cardNumber) {
  // write your code here
 
 
}
