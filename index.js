var cart;

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

var getCart = () => {return cart;}

var addToCart = (item) => {
    var itemObj = {}
    var rand = Math.floor((Math.random() * 100) + 1)

    itemObj[`${item}`] = rand

    cart = [...cart, itemObj]

    console.log(item + " has been added to your cart.")

    return cart
}

var viewCart = () => {
    var itemList = []
    for(var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
            itemList.push(" " + item + " at $" + cart[i][item])
        }
    }

    console.log(cart.length > 0 ? "In your cart, you have" +
        itemList.join() + "." : "Your shopping cart is empty.")
}

var removeFromCart = (itemToRemove) => {
    var removed = false

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(`${itemToRemove}`)) {
            cart.splice(i,1)
            removed = true
        }
    }

    if (!removed) {
        console.log("That item is not in your cart.")
    }

    return cart
}

var placeOrder = (ccn) => {
    console.log(ccn === undefined ? "We don't have a credit card on file for you to place your order." : `Your total cost is $${total()}, which will be charged to the card ${ccn}.`)
    cart = []
}
