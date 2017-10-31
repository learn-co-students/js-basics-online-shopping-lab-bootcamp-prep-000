/*
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  //cart.push({[item]: Math.random()*100})
  var itemName = item
  var itemPrice = Math.floor(Math.random()*100)
  cart.push({[itemName]: itemPrice})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else {
    if (cart.length===1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
    }
    if (cart.length>=2) {
      var prelude = "In your cart, you have"
      for(var i = 0; i<cart.length-1; i++){
        var prelude = `${prelude} ${Object.keys(cart[i])[i]} at $${cart[i][Object.keys(cart[i])[i]]},`
      }
      var lastItem = cart.length-1
      return `${prelude} and ${Object.keys(cart[lastItem)[lastItem]} at $${cart[lastItem][Object.keys(cart[lastItem])[lastItem]]}.`
    }

  }
}

while(deliLine.length>0){
  ++i
  var inLine = `${inLine}, ${i}. ${deliLine.shift()}`
}
return `The line is currently: ${inLine}`
*/

















var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName){
  cart.push({[itemName]: Math.floor((Math.random()*100)+1)})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else {
    var status = "In your cart, you have "
    if (cart.length===1) {
      var status = `${status}${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`
      console.log(status)
    } else {
      if (cart.length===2) {
        var status = `${status}${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`
        console.log(status)
      } else {
        for (var i = 0; i < cart.length-1; i++) {


        status = `${status}${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `
    }

    status = `${status}and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
    console.log(status)
    }
    }
}
  }





function total() {
  var price = 0
  for (var i = 0; i < cart.length; i++){
    var price = price + cart[i][Object.keys(cart[i])[0]]
  }
  return price
}

function removeFromCart(item) {
 var indicator = 0
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)===true){
      cart.splice(i,1)
      var indicator = 1
    }
  }
  if (indicator===0) {
    console.log("That item is not in your cart.")
  }
  return cart
}





function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    console.log(message)
    cart = []
  }

}
