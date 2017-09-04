var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   let price = Math.floor((Math.random() * 100) + 1)
   let itemConstructor = Object.assign({}, {[item] : price})
   setCart([...getCart(), itemConstructor])
   console.log(`${item} has been added to your cart.`)
   return getCart()
 }

function viewCart() {
  let message = ''
  if (getCart().length < 1) {
    message = 'Your shopping cart is empty.'
  } else {
    const c = getCart()
    message = 'In your cart, you have '
    for (let i = 0; i < cart.length; i++) {
      let item =  Object.getOwnPropertyNames(cart[i])[0]
      message += `${item} at $${c[i][item]}`
      message += (i < c.length - 1 && c.length !== 2) ? ', ' : ''
      message += (c.length === 2 && i === 0) ? ' ' : ''
      message += (i === c.length - 2 ) ? 'and ' : ''
    }
    message += '.'
  }
  console.log(message)
}

function total() {
  const c = getCart()
  let total = 0
  for (let i = 0; i < c.length; i++) {
    let item = Object.getOwnPropertyNames(c[i])[0]
    total += parseInt(c[i][item])
  }
  return total
}

function removeFromCart(item) {
  let c = [...getCart()]
  for (let i = 0; i < c.length; i++) {
    if (c[i].hasOwnProperty(item)) {
      c = [...c.slice(0, i), ...c.slice(i + 1)]
      setCart(c)
    }
  }
  console.log('That item is not in your cart.')
  return getCart()
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
