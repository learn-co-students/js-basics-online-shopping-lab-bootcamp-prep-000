var cart = [];

function getCart() {
  return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  const item = name
  const price = Math.floor((Math.random()*99)+1)
  const itemPriceObject = { itemName: item, itemPrice: price}
  cart.push(itemPriceObject)
  return `${item} has been added to your cart.`
  return cart
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    const intro = `In your cart, you have `;
    var totalCart = `${intro}`
    for (let i = 0; i<cart.length; i++) {
      if (i === cart.length-2){
        totalCart += `${cart[i].itemName} at $${cart[i].itemPrice} `;
      }
      else if (i === cart.length-1){
        totalCart += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else {
        totalCart += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return totalCart;
  }
}

function total() {
  var totalInCart = 0
  for (let i = 0; i < cart.length; i++){
    totalInCart += cart[i].itemPrice
  }
  return totalInCart
}

function removeFromCart(name) {
  for (let i = 0 ; i < cart.length; i++){
    if (name === cart[i].itemName) {
      return cart.splice(i,1)
    }
  }
   return 'That item is not in your cart.'
}


function placeOrder(ccn) {
 if (isNaN(`${ccn}`)){
   return `Sorry, we don't have a credit card on file for you.`
 } else{
   let balance = total()
   cart = []
   return `Your total cost is $${balance}, which will be charged to the card ${ccn}.`
 }

}