let cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * Math.floor(100))
  let item_obj = {itemName: item, itemPrice: price}
  cart.push(item_obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cart_str = 'In your cart, '
  for (let i = 0; cart.length > i; i++) {
    let item = cart[i].itemName
    let price = '$' + cart[i].itemPrice
    if (i + 1 == cart.length && cart.length > 1) {
      cart_str += `and ${item} at ${price}`
    } else if (i != 0 && i != cart.length -1){
      cart_str += `${item} at ${price}`
    } else {
      cart_str += `you have ${item} at ${price}`
    }
    cart_str += cart.length == i + 1 ? '.' : ', '
  }
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else {
    return cart_str
  }
}

function total() {
  let total_price = 0;
  for (let i = 0; cart.length > i; i++) {
    total_price += cart[i].itemPrice
  }
  return total_price
}

function removeFromCart(item) {
  for (let i = 0; cart.length > i; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i,1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    let reciept = `Your total cost is $${total()}, which will be ` +
                  `charged to the card ${cardNumber}.`
    cart = []
    return reciept
  }
}
