var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var str = "In your cart, you have "
  var max = cart.length-1
  if (cart.length==0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length==1) {
    console.log(`${str}${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if (cart.length==2) {
    console.log(`${str}${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
    var newStr = ""
    for (var i=0; i<max; i++) {
      newStr = newStr.concat(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
      }
    var endStr = `${Object.keys(cart[max])} at $${cart[max][Object.keys(cart[max])]}.`
    console.log(`${str}${newStr}and ${endStr}`)
  }
}

function total() {
  var sum = 0
  for (let i=0; i<cart.length; i++) {
  sum +=cart[i][Object.keys(cart[i])]
  }
  return sum
}

function removeFromCart(item) {
    for (let i =0; i<cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1)
        return cart
      }
    }
    console.log ("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var amount = total()
    console.log(`Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  } else {
    console.log ("Sorry, we don't have a credit card on file for you.")
  }

}
