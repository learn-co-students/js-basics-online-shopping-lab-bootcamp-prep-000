var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var newObj = {}
  newObj[item]=price
  cart.push(newObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var newcart = []
  var str = ''

  if (!cart.length){
    console.log("Your shopping cart is empty.")

  } else {
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      var price = cart[i][item]

      if ((cart.length > 1) && (i===cart.length-1)){
        newcart.push(`and ${item} at $${price}`)
      } else {
        newcart.push(`${item} at $${price}`)
      }
    }

  if (newcart.length===2){
    str = " "
    }else if (newcart.length >=3){
      str = ", "
    }
  console.log(`In your cart, you have ${newcart.join(str)}.`)
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++){
      sum += parseInt(cart[i][Object.keys(cart[i])])
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++)
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
    }
  if (!cart.hasOwnProperty(item)){
      console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
        var cartTotal = total()
        console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
        cart = []
    } else {
		    console.log("Sorry, we don't have a credit card on file for you.")
    }
}
