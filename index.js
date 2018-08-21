var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  let newItem = getItemAndPrice(item)
  getCart().push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function getItemAndPrice(item){
  return {
    'itemName':item,
    'itemPrice':Math.floor(Math.random() * 101)
  }
}
  
function viewCart() {
  if (getCart().length === 0){
    return "Your shopping cart is empty."
  } 
  var sentance = "In your cart, you have"
  if (getCart().length === 1){
    return `${sentance} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  var middleSentances = ''
  if (getCart().length >= 2){
    for (let i = 0; i < getCart().length; i++){
      if (i === getCart().length - 1){
        middleSentances = `${middleSentances}and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }else{
        middleSentances +=`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
    }
    return `${sentance} ${middleSentances}`
  }
}

function total(){
  let total = 0
  for (let i = 0; i < getCart().length; i++) {
    total = total + getCart()[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  if (getCart().indexOf(item) === -1){
    return "That item is not in your cart."
  }
  setCart(getCart().splice(getCart().indexOf(item), 1))
  return getCart()
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  let sentance = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart("")
  return sentance
}


