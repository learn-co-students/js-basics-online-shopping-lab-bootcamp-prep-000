var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 // create a new object
 cart.push( { [item]: getRandomIntInclusive(1,100) } )
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here

  var cartLength = cart.length

  switch(cartLength) {
    case 0:
      console.log("Your shopping cart is empty.")
      break
    case 1:
      var itemAndPrice = cart[0]
      var item = Object.keys(itemAndPrice)[0]
      var price = itemAndPrice[item]
      console.log(`In your cart, you have ${item} at \$${price}.`)
      break
    default:
      var sum = "In your cart, you have "
      sum += cart.reduce(function(total, item, index) {
        // console.log(index, item)
        if (index == 0) {
          return total + Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]]
        }
        else if (index == cartLength - 1) {
          if (cartLength == 2) {
            return total + " and " + Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]] + "."
          }
          else {
            return total + ", and " + Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]] + "."
          }
        }
        else {
          return total + ", " + Object.keys(item)[0] + " at $" + item[Object.keys(item)[0]]
        }
      }, '')
      console.log(sum)
  }

}

function total() {
  // write your code here
  var sum = cart.reduce(function(total, item) {
    return total + item[Object.keys(item)[0]]
  }, 0)
  return sum
}

function removeFromCart(name) {
  // write your code here
  var found = false
  var sum = cart.reduce(function(total, item, index) {
    if (Object.keys(item)[0] == name) {
      found = true
      return total
    }
    else {
      total.push(item) // push() returns the new length
      return total
    }
  }, [])

  if (!found) {
    console.log("That item is not in your cart.")
    return cart
  }
  else {
    cart = sum
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

/*viewCart()

addToCart("lemons")
addToCart("bananas")
addToCart("apples")
// addToCart("strawberries")

viewCart()

console.log(removeFromCart("bananas"))

viewCart()*/
