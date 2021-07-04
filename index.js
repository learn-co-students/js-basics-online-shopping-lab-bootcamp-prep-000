var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
  var item = {itemName: name, itemPrice: Math.floor(Math.random() * 101)}
  cart.push(item)
}

function viewCart() {
  return getCart().length === 0 ? `Your shopping cart is empty.` : helperMethod()
}

function helperMethod() {
  var beginningMessage =  `In your cart, you have`
  if (getCart().length >= 1) {
    beginningMessage += ` ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >=2) {
    var messageTwo = ``
    for (var counter = 1; counter < getCart().length -1; counter++) {
      messageTwo+= `, ${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}`
    }
    beginningMessage += `${messageTwo}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${beginningMessage}.`
}



function total() {
  var total = 0
  for (var counter = 0; counter < getCart().length; counter++) {
    total = total + getCart()[counter].itemPrice
  }
  return total
}

function removeFromCart(item) {
  let cart = getCart()
 for (var counter = 0; counter < cart.length; counter++) {
   if (cart[counter].itemName === item) {
     cart.splice(counter, 1)
     return cart
   }
 }
     return `That item is not in your cart.`
   }

function placeOrder(cardNumber) {
 if (arguments[0] == undefined) {
   return "Sorry, we don't have a credit card on file for you."
   } else {
   var sumToCharge = total()
   setCart([])
   return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
     }
   }
