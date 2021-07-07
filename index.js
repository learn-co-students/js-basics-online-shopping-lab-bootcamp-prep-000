var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor((Math.random() * 100) + 1);

  var currentItem = {itemName: item, itemPrice: randomPrice}
  cart.push(currentItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartSize = cart.length
  var currentCart = []
  var [lastItem] = cart.slice(-1)
  var finalItem = []
  if (cartSize === 0){
    return "Your shopping cart is empty."
  }
  else if (cartSize === 1){
    currentCart.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}`)
    return "In your cart, you have " + currentCart +"."}
  else {
    for (var i = 0; i < cartSize-1; i++){
    currentCart.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
    finalItem.push(`and ${lastItem.itemName} at $${lastItem.itemPrice}`) 
    return "In your cart, you have" + currentCart+", "+ finalItem +"."
}
}
function total() {
  var totalPrice = []
  var sum = 0
  for (var i = 0; i < cart.length; i++){
  totalPrice.push(parseInt(`${getCart()[i].itemPrice}`))
  sum += totalPrice[i]
  }
  return sum
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i,1)
        return cart
      }
    }
    return "That item is not in your cart."
  
}

function placeOrder(cardNumber) {
var sum = total()
{
  if (cardNumber === undefined){
  return "Sorry, we don't have a credit card on file for you."}
  else {
    cart.length = 0
    return "Your total cost is $"+sum+", which will be charged to the card "+ cardNumber+"."}
}
}