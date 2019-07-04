var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    var randomPrice = Math.floor(Math.random() * 100 + 1)
    var shoppingList = {
        itemName: item,
        itemPrice: randomPrice
    }
    cart.push(shoppingList)
    return `${item} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0) {
        return "Your shopping cart is empty."
    } else if (cart.length === 1) {
        var complicatedMessage = "In your cart, you have "
        complicatedMessage += `${cart[0].itemName} at $${cart[0].itemPrice}.`
        return complicatedMessage
    } else {
        var complicatedMessage = "In your cart, you have "
        for (let cartIndex = 0; cartIndex < cart.length - 1; cartIndex++) {
            // stop the loop right before the last element so we can type "and" and finish with a period.
            complicatedMessage += `${cart[cartIndex].itemName} at $${cart[cartIndex].itemPrice}, `
        }
        complicatedMessage += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
        // look at the last element and add the word "and" plus a period at the end.
        return complicatedMessage
    }
}

function total() {
    var totalCost = 0
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        totalCost += cart[cartIndex].itemPrice
        // add the current index price to the variable "totalCost"
    }

    return totalCost
}

function removeFromCart(item) {
    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        if (cart[cartIndex].itemName === item) {
            cart.splice(cartIndex, 1)
            return cart
        }
    }
    // if nothing is returned then we say the following
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }
}