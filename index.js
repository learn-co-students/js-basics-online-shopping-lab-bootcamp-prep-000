var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}




function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100)
 //console.log(itemPrice)
 var item = {itemName: itemName, itemPrice: parseInt(itemPrice)}
 cart.push(item)
 
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartItems = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return printOneItem

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${cart[cart.length-2].itemName} at $${cart[cart.length-2].itemPrice}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return printTwoItems
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
          return printThreeOrMoreItems
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  
  for(let i =0; i< cart.length; i++){
    totalPrice += cart[i].itemPrice
  }
  
  return totalPrice
  
}


function removeFromCart(item) {
  // write your code here
  
  for(let i=0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
    }
  }

  return "That item is not in your cart."
}



function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var totalPrice = total()
    for(let i = 0; i < cart.length; i++){
      cart.pop()
    }
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
  else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
