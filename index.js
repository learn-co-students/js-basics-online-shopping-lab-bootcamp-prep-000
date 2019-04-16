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
  var obj = {
    itemName : item,
    itemPrice : price,
  }
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length > 2){
    var arr = []
    for (let i = 0; i < cart.length-1; i++){
       var itemPrice = `${cart[i].itemName} at $${cart[i].itemPrice}`
       arr.push(itemPrice)
    }
    var newArr= arr.join(", ")
    return `In your cart, you have ${newArr}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  var total = 0
  // var numToAdd= []
  for (let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
    // numToAdd.push(cart[i].itemPrice)
  }
  // var sum = numToAdd.reduce(function(a,b) {return a + b}, 0)
  return total
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice([i], 1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber){
    var totalNum = total()
    cart = []
    return `Your total cost is $${totalNum}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }

}
