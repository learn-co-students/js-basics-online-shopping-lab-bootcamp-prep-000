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
 const itemObj = {itemName: item}
 itemObj.itemPrice = Math.floor(Math.random()* 100)
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}


function viewCart() {
  // write your code here
  if (cart.length === 0) {return "Your shopping cart is empty."
} else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
} else {
  let orderList = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]
    if (i === cart.length - 1) {
      orderList += `and ${item.itemName} at $${item.itemPrice}.`
      return orderList
    }
    orderList += `${item.itemName} at $${item.itemPrice}, `
  }
  return orderList
  }
}


function total() {
  // write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total

}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i ++) {
    let thing = cart[i];
    if (thing.itemName === item) {
      console.log(cart)
      console.log(i, thing.itemName)
      cart.splice(i, 1)
      return cart
      }
    }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  // write your code here
  const cost = total()
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = [];
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
