var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random()*100 + 1)
 
 var items = {
   itemName: item,
   itemPrice: price
 }
 
 cart.push(items)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }else{
    let string = `In your cart, you have `
    if(cart.length === 1){
      string += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else{
      for(let i=0; i<cart.length; i++){
        string += `${ i===cart.length - 1 ? 'and ' : ''}${cart[i].itemName} at $${cart[i].itemPrice}${ i === cart.length - 1 ? '.' : ', '}` 
      }
    }
    return string
  }
}

function total() {
  let result = 0
  for(let i=0; i<cart.length; i++){
    result += cart[i].itemPrice
  }
  return result
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if( cart[i].itemName === item ){
      cart.splice(i,1)
      return cart
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var cartTotal = total()
  if( cardNumber === undefined ){
    return `Sorry, we don't have a credit card on file for you.`
  }else{
    cart = []
    let card = cardNumber
    return `Your total cost is $${cartTotal}, which will be charged to the card ${card}.`
  }
}
