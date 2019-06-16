var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemAndPrice = {itemName: item, itemPrice: (Math.floor(Math.random()*100))}
  cart.push(itemAndPrice)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let view = []
  let i = 0
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    } else {
    for (let i = 0; i < cart.length - 1; i+=1) {
      view.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } view.push(` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`)
  } return `In your cart, you have${view}`
}

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i+=1) {
    sum += cart[i].itemPrice
  } return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i+=1) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    } 
  } 
      return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
}


console.log(addToCart("Milk"))
console.log(cart)
console.log(addToCart("Apple"))
console.log(cart)
console.log(addToCart("Eggs"))
console.log(addToCart("Bananna"))
console.log(addToCart("Oranges"))
console.log(cart)