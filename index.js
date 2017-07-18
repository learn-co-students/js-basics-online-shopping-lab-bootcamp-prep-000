var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  var price = Math.floor(Math.random() * 100) + 1
  obj[item] = price
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var string = "In your cart, you have "
  if (cart.length === 0) {
     string = "Your shopping cart is empty."
  } else {
    for (var item in cart) {
      var key = Object.keys(cart[item])[0]
      if (item == cart.length -1){
      string += (cart.length === 1 ? "" : "and ") + key + " at $" + cart[item][key] + "."
    } else {
      string += key +" at $" + cart[item][key] + (cart.length > 2 ? ", " : " ")
    }
    }
  }
  console.log(string)
}

function total() {
  var total = 0
  for (var item in cart){
    total += Object.values(cart[item])[0]
  }
  return total
}

function removeFromCart(item) {
  for (var index in cart){
    if (Object.keys(cart[index])[0] === item) {
      cart.splice(index, 1)
      return cart
    } 
  }
  console.log("That item is not in your cart.")
  return cart
}


function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
