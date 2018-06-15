var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createItem (item) {
  return {itemName: item, itemPrice: randomNumber(0,100)}
}

function addToCart(item) {
 var newItem = createItem(item)
  getCart().push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (getCart().length === 0) {return `Your shopping cart is empty.`} else {
    
    var openingSentence = `In your cart, you have `
  
    if (getCart().length >= 1) {
      openingSentence += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
      
      if (getCart().length >=2) {
        for (let i=1, l=getCart().length-1; i<l; i++) {
          openingSentence += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
          }
        openingSentence += `, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
      }
    }
  return`${openingSentence}.`
  }
}


function total() {
  var sum = 0
  
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}



 function removeFromCart(item) {
  
  var itemToRemove = searchResult(item)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
 }
   
  
  function searchResult(item) {
  var searchResult
  
  for (let i=0, l=getCart().length; i<l; i++) {
    if (getCart()[i].itemName === item) {
      searchResult = getCart()[i]
    }
  }
  return searchResult
  
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}



function placeOrder(cardNumber) {
   if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}
