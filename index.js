var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100) + 1})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = "In your cart, you have "
  if (getCart().length === 0)
      console.log("Your shopping cart is empty.")
  else if (getCart().length === 1) {
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${Object.values(getCart()[0])[0]}.`)
  } else if (getCart().length === 2) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${Object.values(getCart()[0])[0]} and ${Object.keys(getCart()[1])[0]} at $${Object.values(getCart()[1])[0]}.`)
  } else {
      for (var i = 0; i < getCart().length - 1; i++) {
          message += `${Object.keys(getCart()[i])[0]} at $${Object.values(getCart()[i])[0]}, `
      }
      message += `and ${Object.keys(getCart()[i])[0]} at $${Object.values(getCart()[i])[0]}.`
      console.log(message);
  }
}

function total() {
  var total = 0
    for (let i = 0; i < getCart().length; i++) {
        total += Object.values(getCart()[i])[0]
    }
   return total
}

function removeFromCart(item) {
    for (let i = 0; i < getCart().length; i++) {
        if (Object.keys(getCart()[i])[0] === item) {
           cart.splice(i, 1);
           return cart
        }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  
  if (cardNumber === undefined || cardNumber === "")
    console.log("Sorry, we don't have a credit card on file for you.")
  var amount = total();
  cart = []
  console.log(`Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`)
}
