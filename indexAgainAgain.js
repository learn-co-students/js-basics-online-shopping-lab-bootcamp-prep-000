var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    cart.push({[item]: Math.floor(Math.random() * 99 + 1)})
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
    var items = []
    if (cart.length === 0) {
        console.log('Your shopping cart is empty.')
    } else {
        for (var i = 0; i < cart.length; i++) {
        items.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
        }
    }
    if (cart.length === 1) {
        console.log(`In your cart, you have ${items}.`)
    } else if (cart.length === 2) {
        console.log(`In your cart, you have ${items.join(' and ')}.`)
    } else if (cart.length >= 3) {
        console.log(`In your cart, you have ${items.slice(0, -1).join(', ')}, and ${items.splice(-1, 1)}.`)
    }
}

function total() {
    var total = 0
    for (var i = 0; i < cart.length; i++) {
        total = total + parseInt(cart[i][Object.keys(cart[i])])
    }
    return total
}

function removeFromCart(item) {
    for (var i in cart) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1)
        }
    } console.log(`That item is not in your cart.`)
    return cart
}

function placeOrder(number) {
    if (number === undefined) {
        console.log(`Sorry, we don't have a credit card on file for you.`)
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
        cart = []
    }
}
