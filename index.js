var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1
 var obj = { [item]: price }
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
    if (cart.length === 0) {
      return console.log("Your shopping cart is empty.")
    }
    else {
      for (let i = 0; i < cart.length; i++) {
       var item = cart[i]
       var name = Object.keys(item)
       var price = item[name]

      if (cart.length === 1) {
      return console.log("In your cart, you have ${name} at $${price}.")
    }
      else if (cart.length === 2) {
        var b = []
        for (let i = 0; i < cart.length; i++) {
           b.push(`${item[i]} at $${price}`)
           var c = b.join(" and ")
        }
        return console.log("In your cart, you have ${c}.")
      }
      else {
        var b = []
        for (let i = 0; i < cart.length; i++) {
           b.push(`${item[i]} at $${price}`)
           var c = b.join(", ")
        }
        return console.log("In your cart, you have ${c}.")
      }
    }
  }
}

function total() {
  for (let i = 0; i < cart.length; i++) {
   var item = cart[i]
   var name = Object.keys(item)
   var price = []
   price.push(item[name])
     for (let j = 0; j < price.length; j++) {
       var sum += parseInt(price[j])
     }
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  cart = []
  if (cardNumber === null) {
    return console.log("Sorry, we don't have a credit card on file for you.")
  }
  var final = total()
  return console.log("Your total cost is ${final}, which will be charged to the card ${cardNumber}.")
}
