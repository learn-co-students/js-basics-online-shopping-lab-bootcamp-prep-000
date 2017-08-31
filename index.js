var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random()*100)
  var object = { [itemName]: itemPrice }
  cart.push(object)
  console.log(`${itemName} has been added to your cart.`)
  return cart
 // write your code here
}

function viewCart() {
  var itemAndCost = []
    if(cart.length === 0){
      console.log(`Your shopping cart is empty.`)
      return cart
    } else if(cart.length === 1){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
      return cart
    } else if(cart.length === 2){
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
    }else {
      for (var i = 0; i < cart.length - 1; i++){
        itemAndCost.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
  }
   console.log(`In your cart, you have ${itemAndCost.join(', ')}, and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}.`)
}
  // write your code here
}
function total() {
  var cartTotal = 0
  for(var i = 0; i < cart.length; i++){
    cartTotal += cart[i][Object.keys(cart[i])]
  }
  return cartTotal
}
  // write your code here

  function removeFromCart(item) {
    let itemInCart = false;

    for (let i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        itemInCart = true;
        cart = cart.slice(0, i).concat(cart.slice(i + 1));
        l--;
      }
    }

    if (!itemInCart) {
      console.log("That item is not in your cart.");
    }

    return cart;
  }

function placeOrder(cardNumber) {
  var cardNumber = cardNumber
  var cartTotal = total()
  if(!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else{
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  cart.shift()
  return cart
}
