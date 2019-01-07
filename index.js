var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100)
  var item = {[itemName]: itemPrice}
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  function name(i) {
    return (Object.keys (cart[i]))
  }
  function price(i) {
    return (cart[i][name(i)])
  }
  if (cart.length===0) {
    console.log ("Your shopping cart is empty.")
  }
  else if (cart.length === 1) {
    console.log (`In your cart, you have ${name(0)} at $${price(0)}.`)
  }
  else if (cart.length === 2) {
    console.log (`In your cart, you have ${name(0)} at $${price(0)} and ${name(1)} at $${price(1)}.`)
  }
  else {
    var nameAtPrice = []
    for (var i=0; i<cart.length; i++) {
      if (i===cart.length-1) {
        nameAtPrice.push (` and ${name(i)} at $${price(i)}.`)
      }
      else {
        nameAtPrice.push (` ${name(i)} at $${price(i)}`)
      }
    }
    console.log (`In your cart, you have${nameAtPrice}`)
  }
}

function total() {
  function name(i) {
    return (Object.keys (cart[i]))
  }
  function price(i) {
    return (cart[i][name(i)])
  }
  var totalPrice = 0
  for (var i=0; i<cart.length; i++) {
    totalPrice = totalPrice + price(i)
  }
  return totalPrice
}

function removeFromCart(item) {
  const cartLength=cart.length
  for (var i=0; i<cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart=[...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  if (cartLength === cart.length) {
      console.log ("That item is not in your cart.")
      }
  return cart
  }


function placeOrder(cardNumber) {
  if (typeof(cardNumber) === 'undefined') {
    console.log ("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
