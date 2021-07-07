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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let str
  let i
  if (cart[0]) {
    str = "In your cart, you have "
    for(i=0; i<cart.length; i++) {
      if (i === cart.length-1 && cart.length > 1) {
        str = str + "and " + cart[i].itemName + " at $" + cart[i].itemPrice
      } else {
      str = str + cart[i].itemName + " at $" + cart[i].itemPrice
      }
      if (i !== cart.length-1) {
        str = str + `, `
      } else {
        str = str + `.`
      }
    }
    return str
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  let totalPrice = 0
  let i
  for (i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  let i
  let f
  for (i=0;i<cart.length;i++) {
    if (cart[i]["itemName"] === item){
      f = i
    }
  }
  if (f) {
    cart.splice(f, 1)
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    let str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.splice(0, cart.length)
    return str
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
