var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemToAdd = { [item]: Math.floor(Math.random() * 100) }
  itemToAdd.itemName = item
  itemToAdd.itemPrice = itemToAdd[item]
  cart.push(itemToAdd)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    let item = cart[0]
    return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`
  } else {
    let sent = `In your cart, you have `

    for (var i = 0; i < cart.length; i++) {
      let item = cart[i]

      if (i != cart.length - 1) {
        sent += `${item.itemName} at $${item.itemPrice}, `
      } else {
        sent += `and ${item.itemName} at $${item.itemPrice}.`
      }

    }
    return sent
  }


}

function total() {
  let totalSum = 0

  for (var i = 0; i < cart.length; i++) {
    let item = cart[i]
    totalSum += item.itemPrice
  }

  return totalSum
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    let totalCost = total()
    setCart([])
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
