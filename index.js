var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomPrice(min, max) {
  let res = Math.floor(Math.random() * (max - min)) + min
  return res
}

function addToCart(item) {
 // write your code here
 let cartItem = Object.assign({}, {[item]: getRandomPrice(1, 100)})
 getCart().push(cartItem)
 console.log(`${item} has been added to your cart.`);
 return getCart()
}

function viewCart() {
  // write your code here
  if(getCart().length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    let result = `In your cart, you have`
    let cart = getCart();
    for(let i = 0; i < cart.length; i++) {
      if(cart.length === 1) {
        result += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      } else if (cart.length === 2) {
        result += ` ${i === cart.length - 1 && cart.length > 1 ? 'and ' : ''}${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i === cart.length - 1 ? '.' : i === cart.length - 2 ? '' : ','}`
      } else {
        result += ` ${i === cart.length - 1 && cart.length > 1 ? 'and ' : ''}${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i === cart.length - 1 ? '.' : ','}`
      }
      //result += ` ${i === cart.length - 1 && cart.length > 1 ? 'and ' : ''}${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}${i === cart.length - 1 ? '.' : i === cart.length - 2 ? '' : cart.length === 2? ',' : ''}`
    }
    console.log(result);
  }
}

function total() {
  // write your code here
  let total = 0
  let cart = getCart()
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  let cart = getCart()
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if(arguments.length < 1) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([])
  }
}
