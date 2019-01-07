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
}

function viewCart() {
  // write your code here
}

function getCart() {
    return cart
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
   cart.push({[item]:price});
   console.log(`${item} has been added to your cart.`)
   return cart
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  var itemsInCart = [] //need an empty array to fill

    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i] //i is the counter! itemAndPrice will now loop through the cart
      let item = Object.keys(itemAndPrice)[0] //this uses the itemAndPrice loop to find the KEYS in the CART array
      let price = itemAndPrice[item] // this uses the itemAndPrice loop to find the ITEMS from the cart array

      itemsInCart.push(`${item} at \$${price}`) //adds the item and price to itemsInCart array
    }
  console.log(`In your cart, you have ${itemsInCart.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }
  if (itemInCart === false) {
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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
