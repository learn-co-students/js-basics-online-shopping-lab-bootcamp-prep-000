var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemAndPrice = { }
 itemAndPrice[item] = Math.floor(Math.random()*100)
 cart.push(itemAndPrice)
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`)
  }
  
  
  if (cart.length === 1) {
    var item = Object.keys(cart[0])
    var price = cart[0][item]
    console.log(`In your cart, you have ${item} at $${price}.`)
    }
   
  if (cart.length === 2) {
      var item1 = Object.keys(cart[0])
      var price1 = cart[0][item1]
      var item2 = Object.keys(cart[1])
      var price2 = cart[1][item2]
      console.log(`In your cart, you have ${item1} at $${price1} and ${item2} at $${price2}.`)
    }
    
  if (cart.length > 2) {
    var newCartMinus = [ ]
    for(let i = 0; i < cart.length; i++) {
      
      if (i<cart.length - 1) {
      item = Object.keys(cart[i])
      price = cart[i][item]
      var itemAtPrice = `${item} at $${price}`
      newCartMinus.push(itemAtPrice)
      }
      if (i === cart.length - 1) {
      var lastItem = []
      item = Object.keys(cart[i])
      price = cart[i][item]
      itemAtPrice = `${item} at $${price}`
      lastItem.push(itemAtPrice) 
      }
    }
  
  //var newCartMinus = newCart.slice(0, newCart.legth - 2)
  var newCartMinusJoined = newCartMinus.join(', ')
  //var lastItem = newCart.slice(-1)
  console.log (`In your cart, you have ${newCartMinusJoined}, and ${lastItem}.`)
  }  
}

function total() {
  var totalPrice = 0
  for(let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])
    var itemPrice = cart[i][item]
    totalPrice = totalPrice + itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var cart2 = []
  for(let i = 0; i < cart.length; i++) {
      if (Object.keys(cart[i]) != item) {
        cart2.push(cart[i])
      }
  }
  if (cart.length === cart2.length) {
    console.log ('That item is not in your cart.')
  }
  else {
    cart = cart2
    return cart
  }
} 

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log ("Sorry, we don't have a credit card on file for you.") 
  }
  else {
      var totalPrice = 0
      for(let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      var itemPrice = cart[i][item]
      totalPrice = totalPrice + itemPrice
      }
  console.log (`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
  cart.length = 0
    
  }
}
