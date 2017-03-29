var cart = [];

function getCart(){
  return cart
}

function addToCart(item){
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var itemObj = {}
  itemObj[item] = itemPrice
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var announcement = "In your cart, you have "
  var fauxCart = cart
  if (fauxCart.length > 0) {
    while (fauxCart.length > 1){
      var itemPair = fauxCart.shift()
      for (var item in itemPair){
        announcement = announcement + item + " at $" + itemPair[item] + ", "
      }
    }
    var lastPair = fauxCart.shift()
    for (var item in lastPair){
      announcement = announcement + item + " at $" + lastPair[item] + "."
    }
    console.log(announcement)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(itemToRemove){
  var check
  for (var item in cart){
    if (cart[item].hasOwnProperty(itemToRemove)){
      check = cart.splice(item,1)
    }
  }
  if (check != itemToRemove){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccNumber = "xxx"){
  if (ccNumber === "xxx"){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    var newCart = []
    setCart(newCart)
  }

}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
