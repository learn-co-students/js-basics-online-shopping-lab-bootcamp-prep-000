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
  var sentence = "In your cart, you have"
  if (getCart().length === 1){
    return `${sentence} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  var middleSentences = ''
  if (getCart().length >= 2){
    for (let i = 0; i < getCart().length; i++){
      if (i === getCart().length - 1){
        middleSentences = `${middleSentences}and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }else{
        middleSentences +=`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
    }
    return `${sentence} ${middleSentences}`
  }
}

function total(){
  let total = 0
  for (let i = 0; i < getCart().length; i++) {
    total = total + getCart()[i].itemPrice
  }
  return total
}

/*function removeFromCart(item) {
  console.log(getCart().indexOf(item))
  if (getCart().indexOf(item) === -1){
    return "That item is not in your cart."
  }
  setCart(getCart().splice(getCart().indexOf(item), 1))
  return getCart()
}*/

function removeFromCart(item){
  for (let i = 0; i < getCart().length; i++){
    if (cart[i].itemName === item){
      getCart().splice(i, 1)
      return getCart()
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  let sentence = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart("")
  return sentence
}


addToCart('apples')
removeFromCart('apples')