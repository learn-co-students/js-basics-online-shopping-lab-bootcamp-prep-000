var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor((Math.random() * 100) + 1)
 let itemToAdd = {
   itemName: `${item.toString()}`,
   itemPrice: price, 
 }
 cart.push(itemToAdd)
 return `${item.toString()} has been added to your cart.`
}

function viewCart() {
  let itemizedCart = []
  if (cart.length > 0){
    for (let i = 0; i < cart.length; i++){
      let and = ''
    if (i === cart.length - 1 && cart.length > 1){
      and = ' and'
    }
    itemizedCart.push(`${and} ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have${itemizedCart.toString()}.`
  }
  else {
  return "Your shopping cart is empty."
}
}

function total() {
  function reducer(total, current) {
    return total + current
  }
  let total = []
  if (cart.length > 0){
    for (let i = 0; i < cart.length; i++){
      total.push(cart[i].itemPrice)
    }
  }
  return total.reduce(reducer, 0)
}

function removeFromCart(item) {
  let copy = cart
    for (let i = 0; i < copy.length; i++){
      if (copy[i].itemName === item){
        copy.splice(i, 1)
       }
    }
    if (cart.length === copy.length) {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  if (cardNumber){
    const subtotal = total()
    cart = []
    return`Your total cost is $${subtotal}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
