var cart = [];

function getCart() {
  return cart
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100);

  cart.push({[item]: price });

  console.log(item + ' has been added to your cart.');

  return cart
}

function viewCart() {
  var emptyCart = cart.length

  if(!emptyCart) {
    return console.log("Your shopping cart is empty.")
  }

var itemPrices = [];

for (var i = 0; i < emptyCart; i++) {
  var itemsAndPrices = cart[i];
  var item = Object.keys(itemsAndPrices)[0];
  var price = itemsAndPrices[item]

  itemPrices.push(`${item} at \$${price}`);
}

console.log(`In your cart, you have ${itemPrices.join(', ')}.`)

}



function removeFromCart(item) {
  var itemInCart = false

  if(!itemInCart) {
    console.log("That item is not in your cart.")
  }

for (var i = 0, l = cart.length; i < l; i++) {
  if(cart[i].hasOwnProperty(item)) {
    itemInCart = true
    cart = cart.slice(0, i)
  }
}
}


function placeOrder(creditCard) {
  if (!creditCard) {
    return console.log('We don\'t have a credit card on file for you to place your order.')
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)

cart = []
}


function setCart(newCart) {
  cart = newCart;
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
