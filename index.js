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
 var cost =  Math.floor(Math.random() * 100) + 1
 cart.push({itemName: item, itemPrice: cost})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  {
    return "Your shopping cart is empty."
  }
  var sum = "In your cart, you have"
  var i = 0
  if(cart.length === 1)
  {
    return `${sum} ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  
  while(i < cart.length)
  {
    if(i === cart.length - 1)
    {
      sum+=` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else
    {
      sum+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    i++
  }
  return sum
}

function total() {
  // write your code here
  var sum = 0
  for(var i = 0; i < cart.length; i++)
  {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++)
  {
    if(item === cart[i].itemName)
    {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === null || cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  var toReturn = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart.splice(0,cart.length)
  return toReturn
}
