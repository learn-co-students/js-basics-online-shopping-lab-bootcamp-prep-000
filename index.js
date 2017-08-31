var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var itemName = item
    var itemPrice = Math.floor((Math.random() * 100 ) + 1)
    item = {
        [itemName]: itemPrice
    }
    cart.push(item)
    console.log(`${itemName} has been added to your cart.`)
    return cart
}

function viewCart() {
  // write your code here
    var printout = new Array()
    for(var i = 0; i < cart.length;i++) {
        var cartObj = cart[i]
        var item = Object.keys(cartObj)
        var price = cartObj[item]
        var insert = `${item} at \$${price}`
        printout.push(insert)
    }
    if(cart.length === 0){
        console.log('Your shopping cart is empty.')
    } else if(cart.length === 1) {
        console.log(`In your cart, you have ${printout[0]}.`)
    } else if(cart.length === 2) {
        console.log(`In your cart, you have ${printout[0]} and ${printout[1]}.`)
    } else if(cart.length > 2) {
        var last = printout.pop()
        console.log(`In your cart, you have ${printout.join(', ')}, and ${last}.`)
    }
}

function total() {
    // write your code here
    var total = 0
    for(var i = 0;i < cart.length;i++){
        var cartObj = cart[i]
        var item = Object.keys(cartObj)
        total += cartObj[item]
    }
    return total
}
function removeFromCart(item) {
    // write your code here
    var matchedItem = false

    for(var i = 0;i < cart.length;i++){
        if(cart[i].hasOwnProperty(item)){
            cart.splice(i,1)
            return cart
            matchedItem = true
        }
    }
    console.log('That item is not in your cart.');
    return cart
}

function placeOrder(cardNumber) {
    // write your code here
    if(cardNumber == null) {
        console.log('Sorry, we don\'t have a credit card on file for you.');
    } else {
        console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
        cart = []
        return cart
    }
}
