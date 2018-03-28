var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({"itemName": item, "itemPrice": price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  let message = 'In your cart, you have '
  if (cart.length === 0)
    return 'Your shopping cart is empty.'
  else{
  
    var list = cart.map(item =>{
      return `${item.itemName} at $${item.itemPrice}`
    })
    if(cart.length > 1){
      list.push(`and ${list.pop()}`)
      list = list.join(", ")
    }
  }
  return message += list + ".";
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
     total += cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item)
      cart.splice(i, 1)
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  let message;
  if(cardNumber)
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  else
    message = "Sorry, we don't have a credit card on file for you."
  cart = []
  return message;
}
