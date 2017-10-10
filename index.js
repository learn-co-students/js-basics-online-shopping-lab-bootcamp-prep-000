var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // function to generate random price between 1 and 100.
  function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // passed-in string ( item ) creates a new object representing the item. The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price
  cart.push({ [item]: randomPrice(1, 100) })
  // print "<itemName> has been added to your cart." to the console and then...
  console.log(`${item} has been added to your cart.`)
  // return the updated cart
  return cart
}

function viewCart() {
  // create array for string statements
  var cartItems = []
  var inYourCart = `In your cart, you have `

  // If the cart is empty, the function should instead print out Your shopping cart is empty.
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  // function for 3+ items — the format looks like this - In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  function threePlus(arr) {
    return arr.slice(0, -2).join(`, `) +
      (arr.slice(0, -2).length ? `, ` : '') +
      arr.slice(-2).join(`, and `) + `.`
  }

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      // if 3 or more items
      if (cart.length >= 3) {
        cartItems.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + threePlus(cartItems))
        // 2 items — format example - In your cart, you have bananas at $17 and pancake batter at $5.
      } else if (cart.length === 2) {
        cartItems.push(`${item} at $${cart[i][item]}`)
        console.log(inYourCart + cartItems.join(` and `) + `.`)
        // 1 item - format example — In your cart, you have bananas at $17.
      } else {
        console.log(inYourCart + `${item} at $${cart[i][item]}.`)
      }
    }
  }
}

function total() {
  var amount = 0
  // iterate through cart array
  for (var i = 0; i < cart.length; i++) {
    for (var price in cart[i]) {
      // adds price of current cart item to previous cart item
      amount += cart[i][price]
    }
  }
  // returns current total value of items in cart
  return amount
}

function removeFromCart(item) {
  // If the cart does not contain a matching item, the function should print out That item is not in your cart. and return the unchanged cart
  // using ES6 Array.prototype.find method
  if (item !== cart.find(x => x.item)) {
    console.log(`That item is not in your cart.`)
  }

  for (var i = 0; i < cart.length; i++) {
    // if the current cart item has the specified property as own property
    if (cart[i].hasOwnProperty(item)) {
      // remove the current cart item
      cart.splice(i, 1)
    }
  }
  // return cart current items
  return cart
}

function placeOrder(cardNumber) {
  var cardNumber = cardNumber
  // If no argument is received, the function should print out Sorry, we don't have a credit card on file for you.
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
    // If a card number is received, the function should print out Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder()). 
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  // empty the cart after order is placed
  return cart = []
}
