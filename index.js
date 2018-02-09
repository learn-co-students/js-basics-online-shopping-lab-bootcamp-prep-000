var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    cart.push({[item]:Math.floor(Math.random()*100)})
    return cart
}

function viewCart() {
    var counter = cart.length
    if (counter == 0){
        console.log('Your shopping cart is empty.')
    }
    var to_print = "In your cart, you have "
    for (var item in cart){
        to_print += `${Object.keys(cart[item])[0]} at $${Object.values(cart[item])[0]}`
        counter --
        if (counter == 1){
            if (cart.length > 2){
                to_print += ','
            }
            to_print += ' and '
        }else if (counter == 0){
            to_print += '.'
        }else{
            to_print += ', '
        }
    }
    console.log(to_print)
}

function total() {
    var sum = 0
    for (var item in cart){
        sum += Object.values(cart[item])[0]
    }
    return sum
}

function removeFromCart(item) {
    var has_item = false
    for (var x in cart){
        if (cart[x].hasOwnProperty(item)){
            has_item = true
            cart.splice(x,1)
            break
        }
    }
    if (!has_item){
        console.log('That item is not in your cart.')
    }
    return cart
    
}

function placeOrder(cardNumber) {
    if (!cardNumber){
        console.log("Sorry, we don't have a credit card on file for you.")
    }else{
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
    cart =[]
}



