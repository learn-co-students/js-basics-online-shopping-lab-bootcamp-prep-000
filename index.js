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
 cart.push({itemName: item, itemPrice: randomPrice()})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  
  let descriptionOfItems = cart.map(item => `${item.itemName} at $${item.itemPrice}`)
  if (cart.length > 1) {
    const removedLastItemDescription = `, and ${descriptionOfItems.pop()}`
    descriptionOfItems = descriptionOfItems.join(', ') + removedLastItemDescription
  }
  const descriptionOfCart = `In your cart, you have ${descriptionOfItems}.`
  return descriptionOfCart
  
}

function total() {
  // write your code here
  return cart.reduce((accumulator, item) => {
    return accumulator + item.itemPrice
  }, 0)
}

function removeFromCart(item) {
  // write your code here
  const indexToRemove = cart.findIndex(product => product.itemName === item)
  if (indexToRemove > 0){
    cart.splice(indexToRemove, 1)    
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  const message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return message
}

function randomPrice() {
  return Math.floor((Math.random() * 100) + 1)
}
