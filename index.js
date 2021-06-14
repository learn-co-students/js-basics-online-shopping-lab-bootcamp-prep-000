var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor(Math.random() * 100) }

 cart.push(newItem);

 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  else {
    var cartList = "In your cart, you have"

    for (var c = 0; c < cart.length; c++) {
      var item = Object.keys(cart[c])
      var priceGrabber = cart[c]
      var price = priceGrabber[item]

      if (cart.length === 1) {
        cartList = cartList + ` ${item} at $${price}.`
        { break; }
      }

      else if (c === 0) {
        if (cart.length == 2) {
            cartList = cartList + ` ${item} at $${price}`
        }

        else {
            cartList = cartList + ` ${item} at $${price},`
        }
      }//else if

      else if (c === cart.length - 1) {
          cartList = cartList + ` and ${item} at $${price}.`
          { break; }
      }

      else {
          cartList = cartList + ` ${item} at $${price},`
      }
    }//for loop
    console.log(cartList);
  } //else
}// function

function total() {
  var totes = 0;
  for (var c = 0; c < cart.length; c++) {
    var item = Object.keys(cart[c])
    var priceGrabber = cart[c]
    var price = priceGrabber[item]
    totes = totes + price
  }
  return totes
}

function removeFromCart(item) {
  var orig = cart.length
  for (var c = 0; c < cart.length; c++) {
    if (cart[c].hasOwnProperty(item) === true) {
        cart.splice(c, 1)
        return cart
        { break; }
    }

  }
  if (orig === cart.length) {
    console.log("That item is not in your cart.")
  }

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }

  else {
    var totes = total();
    console.log(`Your total cost is $${totes}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
