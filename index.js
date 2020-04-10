var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const price = (Math.floor(Math.random() * Math.floor(100)))
  const newItem = { itemName: itemName, itemPrice: price }
  cart.push(newItem)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  if ( cart.length === 0 ) {
    return `Your shopping cart is empty.`
  }
  let bar
  if ( cart.length === 1 ) {
    bar = viewItem(cart[0])
  } else {
    let foo = []
    for ( let i = 0; i < cart.length - 1; i++) {
      foo.push(viewItem(cart[i]))
    }
    foo.push(`and ${viewItem(cart[cart.length - 1])}`)
    bar = foo.join(", ")
  }
  return `In your cart, you have ${bar}.`
}

function viewItem(item) {
  return `${item.itemName} at $${item.itemPrice}`
}

function total() {
  // write your code here
  return
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
