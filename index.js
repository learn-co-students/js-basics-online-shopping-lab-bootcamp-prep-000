var cart = [];

//Returns de objects in the cart
function getCart() {
  return cart;
}

//function to add items to the cart
function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

//Function to view all of the items in the cart or return message if empty
function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}


//Removes a specified item from the cart
//Returns message if item is not in cart
function removeFromCart (item) {
  let cartItem = false
  const l = cart.length

  for (let i = 0; i < l; i++) {

    if (cart[i].hasOwnProperty(item)) {
      cartItem = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!cartItem) {
    console.log("That item is not in your cart.")
  }
  return cart
}


//Place order only if card is entered
//Clear the cart after placing the order
function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

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
