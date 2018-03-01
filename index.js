var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: parseInt(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
    if (cart.length === 0) {
        console.log('Your shopping cart is empty.')
    }
    else {
        if (cart.length === 1) {
            console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
        }
        else if (cart.length === 2) {
            console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
        }
        else {
            var cartArray = []
            var i = 0
            while (i < cart.length) {
				if (i === cart.length - 1) {
					cartArray.push(` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)
                }
				else {
					cartArray.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
                }
                i++
            }
            console.log('In your cart, you have' + cartArray)
        }
    }
}

function total() {
	var i = 0
	var totalCost = 0
	while (i < cart.length) {
		totalCost = totalCost + parseInt(Object.values(cart[i]))
		i++
	}
	return totalCost
}

function removeFromCart(item) {
	var originalCartLength = cart.length
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i,1)
        }
    }
    if (originalCartLength === cart.length) {
        console.log('That item is not in your cart.')
    }
    console.log(cart)
}

function placeOrder(cardNumber) {
	if (cardNumber) {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
		cart.splice(0)
		console.log(cart)
		}
	else {
		console.log('Sorry, we don\'t have a credit card on file for you.')
	}
}
