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
 var thing = {}
 thing[item] = Math.floor(100*Math.random())
 cart.push(thing)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  
  else{
    var statement = "In your cart, you have "
    
    if (cart.length === 1){
      statement += `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`
    }
    else if (cart.length === 2){
      statement += `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} `
      statement += `and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`
    }
    else {
      for (var i = 0; i < cart.length; i++){
        if (i === cart.length - 1){
          statement += `and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`
        }
        else {
          statement += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `
        }
      }
    }
    console.log(statement)
  }
}



function total() {
  // write your code here
  var sum = 0
  
  for (var i = 0; i < cart.length; i++){
    sum += Object.values(cart[i])[0]
  }
  
  return sum
}

function removeFromCart(item) {
  // write your code here
    for (var i = 0; i < cart.length; i++){
      if (Object.keys(cart[i])[0] == item){
        cart.splice(i,1)
        return cart
      }
    }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
    return
  }
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.length = 0
}
