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
  var list = {
   itemName: item, 
   itemPrice: Math.random()*Math.floor(100)
   } 
   cart.push(list)
   return `${item} has been added to your cart.`
}

function viewCart() {
  var newList = []
  if (cart.length > 1){
    for (let i = 0; cart.length -1 > i; i++){
      newList.push(` ${cart[i].itemName} at \$${cart[i].itemPrice}`)
    } return `In your cart, you have${newList}, and ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}.`
  }else if (cart.length === 1){
    for (let i = 0; cart.length > i; i++){
      newList.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`)
    } return `In your cart, you have ${newList}.`
    } else {return `Your shopping cart is empty.`}
}


function total() {
  var sum = 0
  for (let i = 0; cart.length > i; i++){
    sum += cart[i].itemPrice
  }return sum
}

function removeFromCart(item) {
  let cart = getCart()
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName === item ){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var newTotal = total()
    cart = []
    return `Your total cost is \$${newTotal}, which will be charged to the card ${cardNumber}.` 
  }
}


