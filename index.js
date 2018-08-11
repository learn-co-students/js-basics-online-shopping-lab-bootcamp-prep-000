var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item_object = {itemName: item, itemPrice: Math.floor((Math.random() *100) +1)}
 cart.push(item_object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 1) {
    var names = {}
    var contents = ""
    for (var i = 0; i < cart.length; ++i) {
      names = cart[i]
      contents += `${names.itemName} at $${names.itemPrice}`
    }
    return `In your cart, you have ${contents}.`
  }
  else if (cart.length === 2) {
    var names = {}
    var contents = ""
    for (var i = 0; i < cart.length; ++i) {
      names = cart[i]
      contents += `${names.itemName} at $${names.itemPrice}, and `
    }
    contents = contents.slice(0, -6)
    return `In your cart, you have ${contents}.`
  }
  else if (cart.length > 2) {
    var names = {}
    var contents = ""
    for (var i = 0; i < cart.length; ++i) {
      names = cart[i]
      if (i < cart.length - 1) {
        contents += `${names.itemName} at $${names.itemPrice}, `
      }
      else {
        contents += `and ${names.itemName} at $${names.itemPrice}`
      }
    }
    return `In your cart, you have ${contents}.`
  }

  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var n = 0
  for (var i = 0; i < cart.length; ++i) {
    n += cart[i].itemPrice
  }
  return n
}

function removeFromCart(item) {
  var check = 0
  for (var i = 0; i < cart.length; ++i){
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return viewCart()
    }
  }
  if (check === 0) {
  return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return string
  }
}
