var cart = Array();

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  cart.push(Object.assign({}, {[itemName]: itemPrice}))
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function priceString(itemName, itemPrice) {
  return ` ${itemName} at $${itemPrice}`
}

function viewCart() {
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  var itemName = Array();
  if (cart[0]) {
    var message = "In your cart, you have"
    if (cart.length == 1) {
        itemName = Object.keys(cart[0])
        message += priceString(itemName[0], cart[0][itemName[0]]) + "."
        console.log(message)

    } else if (cart.length == 2) {
        itemName = Object.keys(cart[0])
        message += priceString(itemName[0], cart[0][itemName[0]])
        itemName = Object.keys(cart[1])
        message += " and" + priceString(itemName[0], cart[1][itemName[0]]) + "."
        console.log(message)

    } else {
        for(let i = 0; i < (cart.length - 1); i++) {
          itemName = Object.keys(cart[i])
          message += priceString(itemName[0], cart[i][itemName[0]]) + ","
        }
        itemName = Object.keys(cart[cart.length - 1])
        message += " and" + priceString(itemName[0], cart[cart.length - 1][itemName[0]]) + "."
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
  return "That item is not in your cart."
}

viewCart()
addToCart("lemons")
viewCart()
addToCart("apples")
viewCart()
addToCart("oranges")
viewCart()
total()
console.log(removeFromCart("prunes"))
//var cart = {"lemons": "78", "apples": "15", "oranges": "65"}
//var cart = {"lemons": 78}
