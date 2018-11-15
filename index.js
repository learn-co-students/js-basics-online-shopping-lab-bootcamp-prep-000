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
var newObj = {itemName: item, itemPrice: Math.floor(Math.random() * 101)}

  cart.push(newObj)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length===0){
    return "Your shopping cart is empty."
  }
  var string = "In your cart, you have "
  var items = []
  var prices = []
  
  var i = 0
  while (i < cart.length){
    // items.push(Object.values(cart[i])[0])
    items.push(cart[i].itemName)
    // prices.push("$" + Object.values(cart[i])[1].toString())
    prices.push("$" + cart[i].itemPrice)
    i++
  }
  
  if(cart.length === 1){
    string += `${items[0]} at ${prices[0]}.`
    
  }else if(cart.length > 1){
    var j = 0
    var tempString = ""
    while (j< items.length){
      if (j === items.length-1){
        string += `, and ${items[j]} at ${prices[j]}.`
      } else if(j === 0){
        string += `${items[0]} at ${prices[0]}`
      } else{
        string += `, ${items[j]} at ${prices[j]}`
      }
      j++
    }
  }
  return string
}

function total() {
  // write your code here
  var sum = 0
  var i = 0
  while (i < cart.length){
    sum += Object.values(cart[i])[1]
    i++
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var i = 0
  while (i < cart.length){
    if (item.toString() === Object.values(cart[i])[0].toString()){
      cart.splice(i,1)
      return cart
    }
    i++
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  var sum = "$" + total().toString()
  if (cardNumber){
    cart = []
    return `Your total cost is ${sum}, which will be charged to the card ${cardNumber}.`
  }
  return "Sorry, we don't have a credit card on file for you."
}
