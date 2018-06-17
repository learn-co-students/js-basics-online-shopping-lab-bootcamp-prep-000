var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(100*Math.random()) //coulb be zero, watch out!!
 var object = {'itemName' : item, 'itemPrice' : price}
 cart.push(object)
 return `${item} has been added to your cart.` 
}

function viewCart() {
  console.log(cart)
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if (cart.length >= 1) {
    let string = 'In your cart, you have' 
    for (let i=0; i<cart.length-1; i++) {
      string = `${string} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
     for (let i=cart.length-1; i<cart.length; i++) {
       string = `${string} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
     }
    return string
  }
}

function total() {
  var totalPrice = 0
  for (let i=0; i<cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  let check = 0
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,i)
      check +=1
    }
      
  }
  if (check === 0) {
   return 'That item is not in your cart.' 
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
   var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
   for (let i=0; i<cart.length; i++) {
     cart.shift()
   }
   return message
  }
}
