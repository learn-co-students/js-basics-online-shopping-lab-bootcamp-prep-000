var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  //returns the cart
  return cart;
}

function addToCart(item) {
  //add an item to the cart, with randomly generated price
  //set price for item by generating random number 0-100; use Math.random()
  //and Math.floor()
  //add {item:price} to cart array
  //console <item> has been added to your cart
  //return cart
  var newItemObject = {[item]: Math.floor(Math.random()*100) }
  cart.push(newItemObject)
  console.log(`${item} has been added to your cart.`)
  return cart;
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

function viewCart() {
//print each item in the cart and their cost
var record = "In your cart, you have "
  if (cart.length === 0 ) {
    console.log("Your shopping cart is empty.");
  } else {
    //want to read: 'In your cart, you have socks at $29, puppy at $79, iPhone at $60.'
    for (var i = 0; i < cart.length; i++) {
      //want to for each object in cart array, access key and value
      for (var item in cart[i]) {
        if (i === cart.length - 1) {
            record = record + (`${item} at $${cart[i][item]}.`)
        } else {
        record = record + (`${item} at $${cart[i][item]}, `)
        }
      }
    }
  console.log(record)
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var product in cart[i]) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1)
            return cart;
        }
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  //if no creditCard, log "We don't have a credit card
  //on file for you to place your order."
  //Otherwise, log "Your total cost is $${total()},
  //which will be charged to the card ${cardNumber}."
  //return emptied cart
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = []
  return cart;
}
