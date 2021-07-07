var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var addedItem = { [item]: Math.ceil(Math.random()*100)}
  cart.push(addedItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }

  var contents = []

  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])
    var price = cart[i][item]
    contents.push(`${item} at $${price}`)
  }

  if (cart.length === 1 ) {
    console.log(`In your cart, you have ${contents[0]}.`)
  }

  if (cart.length === 2 ) {
    console.log(`In your cart, you have ${contents[0]} and ${contents[1]}.`)
  }

  if (cart.length > 2 ) {
    var lastItem = contents.pop()
    console.log(`In your cart, you have ${contents.join(', ')}, and ${[lastItem]}.`)
  }
}

function total() {
  var sum = 0
  if (cart.length) {
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      sum = sum + cart[i][item]
     }
  }
  return sum;
}

function removeFromCart(item) {
  if (!cart.length) {
    console.log("That item is not in your cart.")
  }

  var presence = false;

  for (let i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(item)) {
        cart.splice(i,1)
        i--
        presence = true
      }
  }

  if (!presence) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var price = total()
    console.log(`Your total cost is $${price}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0
  }

}
