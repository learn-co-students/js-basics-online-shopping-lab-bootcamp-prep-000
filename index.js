var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = String(item)
  var itemPrice = parseInt(Math.random()*100)
  var cartitem = { [itemName]: itemPrice }
  cart = [...cart, cartitem]
  console.log(itemName + " has been added to your cart.")
  return cart
}

function viewCart() {
  var len = cart.length
  var keys = []
  var itemPrice = []
  if (len === 0){
    console.log("Your shopping cart is empty.")
  } else{
      for(var i = 0; i < len; i++){
        keys.push(Object.keys(cart[i])[0]) // Need the extra 0 to select array within array
        itemPrice.push(cart[i][keys[i]])
      }
      if (len === 1){
        console.log(`In your cart, you have ${keys[0]} at $${itemPrice[0]}.`)
      } else if (len === 2){
        console.log(`In your cart, you have ${keys[0]} at $${itemPrice[0]} and ${keys[1]} at $${itemPrice[1]}.`)
      } else{
        var out = `In your cart, you have `
        for (var x = 0; x < len-1; x++){
          out += `${keys[x]} at $${itemPrice[x]}, `
        }
        console.log(out + `and ${keys[len-1]} at $${itemPrice[len-1]}.`)
      }
  }
}
  
    
function total() {
  var len = cart.length
  var keys = []
  var itemPrice = []
  var total = 0
  for(var i = 0; i < len; i++){
    keys.push(Object.keys(cart[i])[0]) // Need the extra 0 to select array within array
    itemPrice.push(cart[i][keys[i]])
  }
  for(var x = 0; x < len; x++){
    total += itemPrice[x]
  }
  return total
}

function removeFromCart(item) {
  var len = cart.length
  var itemName = String(item)
  var x = 0
  while(x===0){
    for(var i = 0; i < len; i++){
      var incart = cart[i].hasOwnProperty(itemName)
      if (incart) {
        cart.splice(i, 1)
        return cart
      }
    }
    console.log("That item is not in your cart.")
    return cart
    x = 1
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
