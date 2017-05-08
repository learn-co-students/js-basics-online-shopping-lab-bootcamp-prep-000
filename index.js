
var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 var randomPrice = Math.floor(Math.random() * 100);
 cart.push({[item]: randomPrice});
 console.log(`${item} has been added to your cart.`)
 return cart;
}


var itemsAndPrice = []
function viewCart() {
    if (!cart.length) {
      return console.log("Your shopping cart is empty.")
    }

  for(let i = 0; i < cart.length; i++) {
    let cartList = cart[i];
    let item = Object.keys(cartList)[0];
    let price = cartList[item]
    itemsAndPrice.push(`${item} at \$${price}`)
  }
   console.log(`In your cart, you have ${itemsAndPrice.join(', ')}.`)
}

function total() {
  let t = 0

   for (var i = 0, l = cart.length; i < l; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }

   return t
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
   return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
