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
 cart.push({[item]: Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var currentCart = "Your shopping cart is empty."
  var itemList = []
  var priceList = []
  for (let i = 0; i < cart.length; i++) {
    itemList.push(Object.keys(cart[i])[0])
    priceList.push(cart[i][Object.keys(cart[i])])
  }
  if (cart.length === 0) {
    console.log(currentCart)
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${itemList[0]} at $${priceList[0]}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${itemList[0]} at $${priceList[0]} and ${itemList[1]} at $${priceList[1]}.`)
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (i === 0) {
        currentCart = `In your cart, you have ${itemList[i]} at $${priceList[i]}`
      } else if (i < cart.length - 1) {
        currentCart = currentCart + `, ${itemList[i]} at $${priceList[i]}`
      } else {
        currentCart = currentCart + `, and ${itemList[i]} at $${priceList[i]}`
      }
    }
    console.log(currentCart + ".")
  }
}

function total() {
  // write your code here
  var balance = 0
  for (let i = 0; i < cart.length; i++) {
    balance += cart[i][Object.keys(cart[i])]
  }
  return balance
}

function removeFromCart(item) {
  // write your code here
  var orderChanged = 0
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      orderChanged = 1
    } else {}
  }
  if (orderChanged === 0) {
    console.log("That item is not in your cart.")
  } else {}
  return viewCart()
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
