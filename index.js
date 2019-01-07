var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 101)
 var x = {[itemName]:itemPrice}
 cart.push(x)
console.log(`${itemName} has been added to your cart.`)
return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else {
    var text = "In your cart, you have "
    for (var i = 0; i < cart.length - 1; i++) {
      text += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
    }
    let suffix = `and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
    console.log(text + suffix)
  }
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += parseInt(Object.values(cart[i]))
  }
  return sum
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
    } else {
      console.log("That item is not in your cart.")
    }
  }
  return cart
 }


function placeOrder(cardNumber) {
  var computer = {shopper:[cardNumber]}
  for (var i = 0; i < computer.length; i++) {
    if (computer[i].hasOwnProperty(cardNumber)) {
      console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
  } else {
      console.log("Sorry, we don't have a credit card on file for you.")
  }
 }
}
