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
 cart.push({itemName: `${item}`, itemPrice: parseInt(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var output = `In your cart, you have `
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    for (var i = 0; i < cart.length; i++){
      if (i === cart.length - 1){
        output+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
        output += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  return output
}

function total() {
  // write your code here
  var price = 0
  for (var i = 0; i < cart.length; i++){
    price += cart[i].itemPrice
  }
  return price
}

function removeFromCart(item) {
  // write your code here
  console.log('attempting to remove' + item)
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var price = total()
    cart.splice(0)
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
