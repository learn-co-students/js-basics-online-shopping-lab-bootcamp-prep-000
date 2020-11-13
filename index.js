var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt() {
  let num = Math.floor(Math.random() * 100)
  return num
}

function createObject(item) {
  return {
    itemName: item,
    itemPrice: getRandomInt()
  }
}

function addToCart(item) {
  getCart().push(createObject(item))
  return `${item} has been added to your cart.`
}

function viewCart() {
  
  let sentance = "In your cart, you have"
  
  if (getCart().length === 0){
    return 'Your shopping cart is empty.'
    
  } else {
  
   for (let i = 0; getCart().length > i; i++) {
      
   if (getCart().length - 2 === i) {
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and`
    
  } else if(getCart().length - 1 === i) {
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
    
  } else { 
    sentance = sentance + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`
   
    }
   }
  } return sentance
}

function getSum() {
  let sum = 0
  for (let i = 0; getCart().length > i; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function total() {
  return getSum()
}

function searchForItem(item) {
  let found = false
  for (let i = 0; getCart().length > i; i++){
    if (getCart()[i].itemName === item) {
      found = i
    } 
  } return found
}

function removeObject(index) {
      getCart().splice(index, 1)
      return getCart()
    }



function removeFromCart(item) { 
  if (searchForItem(item) === false) {
    return 'That item is not in your cart.'
    
  } else {
    return removeObject(searchForItem(item))
  } 
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let sentance = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    getCart().splice(0)
    return sentance
    
  }
}
