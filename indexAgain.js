var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(i) {
    cart.push({[i]: Math.floor(Math.random() * 99 + 1)})
    console.log(`${i} has been added to your cart.`)
    return cart
}

function viewCart() {
    if (cart.length === 0) {
        console.log(`Your shopping cart is empty.`)
    } else {
        var n = []
        for (let i = 0; i < cart.length; i++) {
            n.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
        }
    }
    if (cart.length === 1) {
        console.log(`In your cart, you have ${n}.`)
    } else if (cart.length === 2) {
        console.log(`In your cart, you have ${n.join(' and ')}.`)
    } else if (cart.length > 2) {
        console.log(`In your cart, you have ${n.slice(0, n.length - 1).join(', ')}, and ${n.slice(n.length - 1)}.`)
    }
}

function total() {
    var total = 0
    for (let i = 0; i < cart.length; i++) {
        total = total + parseInt(cart[i][Object.keys(cart[i])])
    }
    return total
}

function removeFromCart(item) {
    for (let j = 0; j < cart.length; j++) {
        if (cart[j].hasOwnProperty(item)) {
          cart.splice(j, 1)
          return cart
        }
    }
    console.log('That item is not in your cart.')
    return cart
}

function placeOrder(n) {
    if (n == undefined) {
        console.log(`Sorry, we don't have a credit card on file for you.`)
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`)
        cart = []
    }

}
