var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemString) {
  var price = Math.floor(Math.random()*(100-1)) + 1
  var item = {itemName: itemString, itemPrice: price}
  cart.push(item)
  return (item["itemName"] + ' has been added to your cart.')
}

function viewCart() {
  if (cart.length === 0) {
    return ('Your shopping cart is empty.') 
  }else if (cart.length === 1) {
    return ('In your cart, you have ' + cart[0]["itemName"] + ' at $' + cart[0]["itemPrice"] + '.')
  }else{
    var inCart = 'In your cart, you have '
    for (var i=0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        inCart = inCart.concat('and ' + cart[i]["itemName"] + ' at $' + cart[i]["itemPrice"] + '.')
      }else{
        inCart = inCart.concat(cart[i]["itemName"] + ' at $' + cart[i]["itemPrice"] + ', ')
      }
      console.log(inCart)
    }
    return inCart
  } 
}

function total() {
  var totalCost = 0
  for ( var i=0; i<cart.length; i++) {
    totalCost += cart[i]["itemPrice"]
  }
  return totalCost
}

function removeFromCart(item) {
 if (cart.length === 0) {
   return ('That item is not in your cart.')
 }else{
  for (var i=0; i<cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i,1)
      return cart
    }
  }
 }
  return cart
}

function placeOrder(cardNumber) {
  var response = ''
  if (!cardNumber) {
    response = response.concat("Sorry, we don't have a credit card on file for you.")
  } else {
      response = response.concat(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
  }
  return response
}

