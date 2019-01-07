var cart = [
  { apples: 4 },
  { bananas: 3 },
  { watermelon: 6 },
  { pear: 120 }
];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { [item]: randomPrice() } )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var list = "In your cart, you have "

  if( cart.length === 0) {
    list = "Your shopping cart is empty."
  }
  else {
    let obj = cart[0]
    let key = Object.keys(obj)[0]
    let val = obj[key]

    if( cart.length === 1 ) {
      list += `${key} at $${val}.`
    }
    else
      list += `${key} at $${val}`
      for( let i=1; i < cart.length; i++ ) {
        obj = cart[i]
        key = Object.keys(obj)[0]
        val = obj[key]

        if(i === cart.length-1) {
          if( cart.length == 2 )
            list += ` and ${key} at $${val}.`
          else
            list += `, and ${key} at $${val}.`
        }
        else {
          list += `, ${key} at $${val}`
        }
      }
    }

  console.log(list)
  return list
}

console.log(viewCart())

function total() {
  let total = 0;
  for( let o of cart ) {
    let key = Object.keys(o)[0]
    total += o[key]
  }
  return total
}

function removeFromCart(item) {
  for( let i in cart ) {
    let obj = cart[i]
    if( obj.hasOwnProperty( item ) ) {
      cart.splice(i, 1)
      return cart
    }
  }

  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if( typeof cardNumber === 'undefined' ) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}

function randomPrice() {
  return ~~( ( Math.random()*100 ) + 1 )
}
