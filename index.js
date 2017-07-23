var cart = Array();

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  cart.push(Object.assign({}, {[itemName]: itemPrice}))
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function priceString(cartIndex) {
  var itemName = Object.keys(cart[cartIndex])[0]
  var itemPrice = cart[cartIndex][itemName]
  return ` ${itemName} at $${itemPrice}`
}

function viewCart() {
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  if (cart[0]) {
    var message = "In your cart, you have"
    if (cart.length == 1) {
        message += priceString(0) + "."
        console.log(message)
        
    } else if (cart.length == 2) {
        message += priceString(0) + " and" + priceString(1) + "."
        console.log(message)

    } else {
        for(let i = 0; i < (cart.length - 1); i++) {
          message += priceString(i) + ","
        }
        message += " and" + priceString(cart.length - 1) + "."
        console.log(message)
    }

  } else {
      console.log("Your shopping cart is empty.")
  }

  return
}

function total() {
  var sum = 0
  for(let i = 0; i < cart.length; i++) {
    var nameOfItem = Object.keys(cart[i])[0] //get key of item object
    sum += cart[i][nameOfItem]
  }
  return sum
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // Your total cost is $71, which will be charged to the card 83296759
  if (cardNumber) {
    var message = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "."
    console.log(message)
    cart.length = 0
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  return
}
