var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100)
  cart.push({itemName: item, itemPrice: price})
  return item + " has been added to your cart."
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    let list = ""
    if(cart.length === 1){
      list = " " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
    } else {
      for(let i=0; i<cart.length; i++){
        if(i < cart.length - 1){
          list += " " + cart[i].itemName + " at $" + cart[i].itemPrice +","
        } else {
          list += " and " + cart[i].itemName + " at $" + cart[i].itemPrice +"."
        }
      }
    } 
    return "In your cart, you have" + list
  }
}

function total() {
  let total = 0
  for(let i=0; i<cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if(cart[i].itemName === item ){
      return cart.splice(i,1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let totaled = total()
    cart.splice(0)
    return "Your total cost is $" + totaled + ", which will be charged to the card " + cardNumber + "."
  }
}
