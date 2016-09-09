var cart

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


function getCart() {
  var str = ""
  for (let i = 0, l = cart.length; i < l; i++){
  str += Object.keys(cart[i]) + " "
  }
  console.log(str)
  return cart
}


  function addToCart(item){
    var price = 0;
    price = Math.floor(Math.random() * 100 )
    cart.push({[item] : price})
    console.log(`${item} has been added to your cart.`)
    return cart
  }


function viewCart(){
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }
      var str = ""
      var item = ""
      var delim = ""

      for (var i = 0; i < l; i++) {
        item = Object.keys(cart[i])
        i == l-1 ? delim = "." : delim = ", "
        str += item + " at $" + cart[i][item] + delim
        }
      console.log ("In your cart, you have " + str)
}


function removeFromCart(item) {
  const l = cart.length
  var itemList = [];

      for (var i = 0; i < l; i++) {
        itemList[i] = Object.keys(cart[i])

        if (Object.keys(cart[i]) == item){
          cart.splice(i,1)
        }
      }
          if (!itemList.hasOwnProperty(item)) {
            console.log("That item is not in your cart.");
          }
        return cart
      }


function placeOrder(ccN) {
  if (ccN ==   null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    const l = cart.length
    var tot = 0;
          for (var i = 0; i < l; i++) {
            tot += cart[i][Object.keys(cart[i])]
          }
    console.log(`Your total cost is $${tot}, which will be charged to the card ${ccN}.`)
    cart = [];
  }
}
