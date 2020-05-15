var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var totals = {itemName: item, itemPrice: Math.floor(Math.random()*100) }
  cart.push(totals)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0)
  {
    return "Your shopping cart is empty."
  }else if (cart.length === 1) {

    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

  }else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    var test = "In your cart, you have "
    for (let i = 0; i < cart.length - 1; i++){
      test += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return test + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`


  }

}


function total() {
  let totals = 0
  for (let i = 0; i < cart.length; i++){
    totals = totals + cart[i].itemPrice
  }
  return totals
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i,1)
      return cart
    }
  }
  if(item != cart.itemName){
    return "That item is not in your cart."
  }

}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  let totes = total()
    cart = []
    return `Your total cost is $${totes}, which will be charged to the card ${cardNumber}.`



}
