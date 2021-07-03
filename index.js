var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  })
  return `${item} has been added to your cart.`
}

function viewCart() {
  const cartMap = cart.map((item, index) => {
    if(index == cart.length - 1 && cart.length != 1) {
      return ` and ${item.itemName} at $${item.itemPrice}.`
    } else {
      return ` ${item.itemName} at $${item.itemPrice}${cart.length === 1 ? '.' : ''}`
    }
  })

  let cartStatement = cart.length === 0 ? 'Your shopping cart is empty.' : `In your cart, you have${[...cartMap]}`
  return cartStatement;
  // write your code here
}

function total() {
  return cart.reduce((acc, cur) => acc + cur.itemPrice, 0)
}

function removeFromCart(item) {
  if(!cart.find((cartItem) => cartItem.itemName === item)) {
    return 'That item is not in your cart.'
  }

  cart = cart.filter((cartItem) => cartItem.itemName != item)
}

function placeOrder(cardNumber) {
  if(!cardNumber) return 'Sorry, we don\'t have a credit card on file for you.'
  const totalCost = total();
  cart = [];
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
