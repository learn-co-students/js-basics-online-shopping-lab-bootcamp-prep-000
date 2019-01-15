var cart = [];

function getCart(){
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var object = {
    itemName: item, 
    itemPrice: price
  }
  cart.push(object)
  return `${object.itemName} has been added to your cart.`;
}

function viewCart() {
var list = [];

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
    
  } else if (cart.length === 1) {
    return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length > 2) {
      for (let i = 0; i < cart.length -1; i++ ) {
        list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
    return `In your cart, you have${list}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
}
  

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++ ) {
    sum += (cart[i].itemPrice)
  }
  return sum
}
  
  

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++ ) {
    console.log(cart[i].itemName === item)
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart  
    }
  }
  return 'That item is not in your cart.'
}



function placeOrder(cardNumber) {
  var totalDue = total()
  cart = []
  if (cardNumber) {
    return `Your total cost is $${totalDue}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}