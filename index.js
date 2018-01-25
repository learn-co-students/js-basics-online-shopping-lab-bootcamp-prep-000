var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var food = {[item]:Math.floor(Math.random()*100)}
 cart.push(food)
 console.log (`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var sen = 'In your cart, you have '
  if (cart.length === 0){
    console.log ('Your shopping cart is empty.')
    return cart
  } else if (cart.length === 1){
    for (let i = 0; i < cart.length; i++){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
    }
  } else if (cart.length === 2){
    for (let i = 0; i < cart.length; i++){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
    }
  } else{
    for (let i = 0; i < cart.length-1; i++){
      sen += `${Object.keys(cart[i])} at $${Object.values(cart[i])}` + ', '
    }
  }
  sen += 'and ' + `${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}` + '.'
  console.log (sen)
}

function total() {
  var sumCost = 0
  for (var i = 0; i < cart.length; i++){
    sumCost += parseInt(Object.values(cart[i]), 10)
  }
  return sumCost
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    console.log (cart[i].hasOwnProperty(item))
    if (cart[i].hasOwnProperty(item) === true){
    cart.splice(i, 1);
    return cart
  }
  }
    console.log ("That item is not in your cart.")
    return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
      console.log ('Sorry, we don\'t have a credit card on file for you.')
    } else {
      console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    cart = []
    return cart
}
