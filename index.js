var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var random = Math.floor(Math.random() * 100) + 1
const itemObject = { itemName: `${item}`, itemPrice: parseInt(random) } 
cart.push(itemObject)
return `${item} has been added to your cart.`
 
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    } else {
      if (cart.length === 2) {
        return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.` 
      } else {
        var mostOfList = []
        for (let i = 0; i < cart.length -1; i++) {
        mostOfList.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
        }
        return `In your cart, you have ${mostOfList.join(', ')}, and ${cart[cart.length - 1]["itemName"]} at $${cart[cart.length - 1]["itemPrice"]}.`
      }
    }
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += (cart[i]["itemPrice"])
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  let i = 0
  for (i = 0; i < cart.length; i++) {
    if(cart[i]["itemName"] === item) {
      cart.splice(i, 1)
      return cart
    } 
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += (cart[i]["itemPrice"])
    }
    cart.length = 0
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
