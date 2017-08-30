var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemCost = {}
 var max = Math.floor(100)
 itemCost[itemName] = parseInt(Math.random(1,101) * max + 1)

 cart.push(itemCost)

 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  var cartSpread = ``
  var output = 'In your cart, you have'
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      if (cart.length === 1){
        for (var key in cart[i]){
          var val = cart[i][key]
        }
        cartSpread = `${key} at $${val}`
      } else if (cart.length === 2) {
          for (var key in cart[i]){
            var val = cart[i][key]
              if (i === 0) {
                cartSpread = `${key} at $${val} and `
              } else {
                cartSpread =  cartSpread + `${key} at $${val}`
              }
            }
          } else if (cart.length > 2) {
              for (var key in cart[i]){
                var val = cart[i][key]
                if (i < cart.length -1){
                  cartSpread = cartSpread + `${key} at $${val}, `
                } else {
                  cartSpread = cartSpread + `and ${key} at $${val}`
                }
              }
            }
          }
          console.log(`${output} ${cartSpread}.`)
        } else {
          console.log("Your shopping cart is empty.")
        }



}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      total = total + cart[i][key]
    }
  }
  return total
}

function removeFromCart(item) {
  var cartLength = cart.length
  for (var i = 0; i < cart.length; i++){
      var pair = cart[i]
      if (pair.hasOwnProperty(item) === true){
        cart.splice(i, 1)
        console.log(cart)
      }
  }
  if (cartLength === cart.length) {
    console.log("That item is not in your cart.")
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    var cost = total()
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    setCart([])
    console.log(cart)
  }
}

/*addToCart("apples")
addToCart("pears")
viewCart()
removeFromCart("apples")
viewCart()
placeOrder(123456)*/
