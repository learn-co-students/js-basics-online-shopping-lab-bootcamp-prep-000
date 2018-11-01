var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) + 1}
    cart.push(itemObject)
 return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  var cartSentenceArray = []

  if (getCart().length === 0){
      return "Your shopping cart is empty."
    }else if (getCart().length === 1) {
        cartSentenceArray.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}`)
      }else if (getCart().length === 2){
          cartSentenceArray.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}`)
  }else{
      for (let i = 0, l = cart.length - 1; i < l; i++){
        cartSentenceArray.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
    cartSentenceArray.push(`and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`)
  }
  return `In your cart, you have ${cartSentenceArray.join(', ')}.`
}

function total() {
  var total = 0

  for (let i = 0, l = cart.length; i < l; i++){
    var price = getCart()[i].itemPrice
      total = total+price
    }
  return total
}

function removeFromCart(item) {
  var itemInCart = false

  for (var i = 1; i<cart.length; i++){
    if (cart[i].itemName === item){
      itemInCart = true
          cart.splice(i,1)
    }
  }
  if (itemInCart === false)
    return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
