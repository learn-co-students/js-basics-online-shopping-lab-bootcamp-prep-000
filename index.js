var cart = [];

function getRandom(){
  return Math.floor(Math.random() * 100) 
  
}
 function setCart(newCart) {
     cart = newCart;
 }

function getCart() {
  return cart;
}

function addToCart(item) {
    cart.push({itemName: item,
               itemPrice: getRandom()
    })
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } else if(cart.length === 1){
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  } else if(cart.length === 2) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
  } else if(cart.length === 3) {
       return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, ${cart[1]['itemName']} at $${cart[1]['itemPrice']}, and ${cart[2]['itemName']} at $${cart[2]['itemPrice']}.` 
  }
}

function total(){
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += cart[i]['itemPrice']
  }
  return total
}

/*function removeFromCart(item) {
  var itemToDelete;
  for(var i = 0; i < cart.length; i++){
    if(cart[i]['itemName'] === item){
      itemToDelete = cart[i]
    } 
  }
    if(itemToDelete){ // itemToDelete === object
      var x = cart.indexOf(item) // x === 0
      cart.splice(x, 1) 
    } else {
      return "That item is not in your cart."
    }
  }
  //{itemName: watermelon,
   // itemPrice: 4.99
  
  
  //var i = cart.indexOf(item)
  //delete cart[i]*/


function placeOrder(cardNumber) {
    
    if(!cardNumber){
      return "Sorry, we don't have a credit card on file for you."
    } else {
      var totalSum = total()
      cart = []
      return `Your total cost is $${totalSum}, which will be charged to the card ${cardNumber}.` 
    }
}


function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : "That item is not in your cart."
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1)
}

