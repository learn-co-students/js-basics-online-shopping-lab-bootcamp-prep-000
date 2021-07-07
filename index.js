var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = new Object ({ itemName : item,
      itemPrice : Math.floor(Math.random()*101)
  });
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if(!cart.length) return 'Your shopping cart is empty.'
  let sentenceStart='In your cart, you have '
  if(cart.length>=1) {
    sentenceStart+=`${cart[0].itemName} at $${cart[0].itemPrice}`
  }
  if(cart.length>=2) {
   let middleSentence=''
    for (let i=1; i<cart.length-1; i++) {
      middleSentence+= `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    sentenceStart+= `${middleSentence}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
  }
  return `${sentenceStart}.`
}

function total() {
  let total=0
  for (let i=0; i<cart.length; i++) {
    total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if(cart[i].itemName===item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
if(cardNumber===undefined) return `Sorry, we don't have a credit card on file for you.`
let amount=total()
cart=[]
return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
}
