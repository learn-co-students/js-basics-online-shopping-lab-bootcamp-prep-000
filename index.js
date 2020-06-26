var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1)
  var myObj = { 
    itemName: item,
    itemPrice: price
  };
  
  cart.push(myObj)
 
  return `${item} has been added to your cart.`
}

function viewCart() {
  console.log(cart)
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var lineStr = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    lineStr += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if (i === cart.length - 1) {
      lineStr += `.`
    } 
    else if (i === cart.length - 2) {
      lineStr += `, and `
    } else
    lineStr += `, `
  }
  return lineStr
}

function total() {
  var sum = parseInt(cart[0].itemPrice)
  for (let i = 1 ; i < cart.length; i++) {
    sum = sum + parseInt(cart[i].itemPrice)
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  var cost =  total()
  cart.splice(0)
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
