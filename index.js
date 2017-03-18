var cart = [];

function getCart(){
    return cart
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100)
    cart.push({ [item]: price })
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
    if (cart.length > 0 && cart[0] !== undefined) {
        var data = []
        for ( var i = 0; i < cart.length; i++){
            var productName = Object.keys(cart[i])
            data.push(" " + productName + " at $" + cart[i][productName] )
        }

        console.log('In your cart, you have' + data + '.')
    } else {
        console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length ; i++) {
        if (cart[i].hasOwnProperty(item)){
            var index = cart.indexOf(item)
            cart.splice(index, 1)
            return
        }
    }
    console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined){
        console.log("We don't have a credit card on file for you to place your order.")
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart = []
    }

}

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
