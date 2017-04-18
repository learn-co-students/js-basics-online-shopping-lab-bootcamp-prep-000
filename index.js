
var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){ // item == 'pizza', addToCart('pizza')
  var price = Math.floor(Math.random() * 100) + 1; // {pizza: 24}
    cart.push({[item]:price}); // [{pizza: 24}, {socks: 15}, {iPad: 75}]
    console.log(`${item} has been added to your cart.`)
    return cart
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart(){
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
    return;
  }
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    for(var item in cart[i]){ // for in with an array gives you index numbers, items == index
      //`${item} at $${cart[i][item]}`// socks at $49 | format for value of a key is object[key]
      newCart.push(`${item} at $${cart[i][item]}`)
    }
  }
  console.log(`In your cart, you have ${newCart.join(', ')}.`)//`in your cart you have ${items} in your ${cart}`
}

function removeFromCart(item){ // 'pizza'
  for(var i = 0; i < cart.length; i++){ //
    if(cart[i].hasOwnProperty(item)){ // {pizza: 24}
       cart.splice(i, 1); // [] -- array.splice(starting index, how many?) // [...array]
       return cart;
    }
  }
  // if cart is never returned - code continues after the for loop. If cart is returned in the for loop, the lines below it never get ran. Return stops all execution of code and returns the value (function done)
  console.log('That item is not in your cart.')
}




function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(card) {

  if(card){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  } else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } cart = [];
}

// placeOrder()
  // if there is not a card given (if an argument is not given it will be null). Else console log "Your total cost is $${total()} << interpolation." Then it sets the cart to empty. Think of which data type (array, obj, ect) the cart is.

// Define a function placeOrder which accepts one argument, a credit card number. If no argument is received, then the function should print out "We don't have a credit card on file for you to place your order.". If there is a credit card on file, the function should print out "Your total cost is $${total()}, which will be charged to the card ${cardNumber}.". The function should empty the cart array.
