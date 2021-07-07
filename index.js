var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemObj = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
cart.push(itemObj)
return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    var output = `In your cart, you have `
    for(var i = 0; i < cart.length; i++) {
      if(i < cart.length - 1){
      output += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  } return output
}
}

function total() {
  var totalValue = 0
  for(var i = 0; i < cart.length; i++) {
    totalValue = totalValue + cart[i].itemPrice
  } return totalValue
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
    cart.splice(i,1)
    return cart
  }
} return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var totalCost = total()
  if (cardNumber === undefined) {
    return `Sorry, we don\'t have a credit card on file for you.`
  } else {
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
