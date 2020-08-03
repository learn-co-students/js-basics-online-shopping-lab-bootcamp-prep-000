var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemDetails = {itemName: item, itemPrice: randomPrice()}
 cart.push(itemDetails)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length) {
    return 'In your cart, you have ' + formattedItems()
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  return cart.reduce((total, item) => (total + item.itemPrice), 0)
}

function removeFromCart(item) {
  let itemDetails = cart.find(itemObject => itemObject.itemName === item )
  if (itemDetails) {
    let itemIndex = cart.indexOf(itemDetails)
    cart.splice(itemIndex, 1)
    return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}

function randomPrice() {
  return Math.floor(Math.random() * 100); 
}

function formattedItems() {
  let formatted = cart.map(item => {
    return `${item.itemName} at $${item.itemPrice}`
  })
  formatLastItem(formatted)
  return formatted.join(', ')
}
// bananas at $17, pancake batter at $5, and eggs at $49.

function formatLastItem(formatted) {
  const lastIndex = formatted.length - 1
  const lastItem = formatted[lastIndex]
  
  if (formatted.length === 1) {
    formatted[lastIndex] = lastItem + '.'
  } else {
    formatted[lastIndex] = 'and ' + lastItem + '.'
  }
}
