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
 var price = (Math.random()*100) + 1
 var it = new Object({ [item]: Math.floor(price) })
 cart.push(it)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var obj = cart[0]
    var item = Object.keys(obj)[0]
    var price = obj[item]
    var view = `In your cart, you have ${item} at $${price}.`
    console.log(view)
  } else if (cart.length === 2) {
    var obj = cart[0]
    var item = Object.keys(obj)[0]
    var price = obj[item]
    var obj2 = cart[1]
    var item2 = Object.keys(obj2)[0]
    var price2 = obj2[item2]
    var view = `In your cart, you have ${item} at $${price} and ${item2} at $${price2}.`
    console.log(view)
  } else{
      var view = "In your cart, you have"

      for (let i = 0; i < cart.length; i++){
        if (i < cart.length-1){
          var obj = cart[i]
          var item = Object.keys(obj)[0]
          var price = obj[item]
          view = `${view} ${item} at $${price},`
        } else{
          var obj = cart[i]
          var item = Object.keys(obj)[0]
          var price = obj[item]
          view = `${view} and ${item} at $${price}.`
        }
      }
      console.log(view)
    }
}

function total() {
  // write your code here
  var price = 0
  for (let i = 0; i < cart.length; i++){
    var obj = cart[i]
    var item = Object.keys(obj)[0]
    var nxt = obj[item]
    price = price + nxt
  }
  return price
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    var obj = cart[i]
    if (obj.hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var tot = total()
    console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`)
    cart = []

  }
}
