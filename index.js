var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item, price) {
 // write your code here
 var price = Math.floor(Math.random(1*100)*101)
 var itemObject = {itemName: item, itemPrice: price};
 cart.push(itemObject)
 return(`${itemObject.itemName} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } 
  if (cart.length === 1)  {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
}
if (cart.length > 2) {
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
}
}

function total() {
  // write your code here
   var sum = 0
for(var i = 0; i < getCart().length; i++) {
 getCart()[i].itemPrice
  	sum = sum + getCart()[i].itemPrice
   }
   return sum
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; ++i) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
    }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    
    var s = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    
    cart = []
    
    return s
  }
}