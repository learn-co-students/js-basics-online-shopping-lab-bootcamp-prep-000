var cart = [{'orange':2}, {'banana':3}, {'bbanana':3}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item]: Math.floor(Math.random() * 100 + 1)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var output = "In your cart, you have"
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 2){
      var keys = [];
      for (let i = 0; i < cart.length; i++) {
        keys.push(Object.keys(cart[i])[0])
      }
      for (let i = 0; i < (cart.length -1); i++) {
        output += ` ${keys[i]} at $${cart[i][keys[i]]}`
      }
      output += ` and ${keys[keys.length - 1]} at $${cart[cart.length -1][keys[keys.length -1]]}.`
      console.log(output)
    } else if (cart.length === 1) {
        var keys = [];
        for (let i = 0; i < cart.length; i++) {
          keys.push(Object.keys(cart[i])[0])
        }
        output += ` ${keys[0]} at $${cart[0][keys[0]]}.`
        console.log(output)
      } else {
          var keys = [];
          for (let i = 0; i < cart.length; i++) {
            keys.push(Object.keys(cart[i])[0])
          }
          for (let i = 0; i < (cart.length -1); i++) {
            output += ` ${keys[i]} at $${cart[i][keys[i]]},`
          }
          output += ` and ${keys[keys.length - 1]} at $${cart[cart.length -1][keys[keys.length -1]]}.`
          console.log(output)
        }
    }

function total() {
  var total = 0
  var keys = [];
  for (let i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i])[0])
  }
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][keys[i]]
  }
  return total
}

function removeFromCart(item) {
  // var keys = [];
  // for (let i = 0; i < cart.length; i++) {
  //   keys.push(Object.keys(cart[i])[0])
  // }
  var cut = 'no'
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var cut = 'yes'
      if (i < cart.length -1) {
        cart = [...cart.slice(0, i), ...cart.slice(i+1)]
      } else {
        cart.pop()
      }
    }
  }
  if (cut === 'no') {
    console.log("That item is not in your cart.")
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  if (! cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
