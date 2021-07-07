var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)  {
var price=Math.floor(Math.random()*100)+1
cart.push({itemName:item, itemPrice:price})
  return (item + ' has been added to your cart.')
}


function viewCart() {
 if (getCart().length===0)  {
   return 'Your shopping cart is empty.'
  } else if (getCart().length===1) {
 return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (getCart().length===2)  {
 return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  } else if (getCart().length===3)  {
 return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`  
  } else for (let i=0; getCart().length>i; i++)  {
   return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`  
  }
 }

function total() {
 var totalPrice=0
 for (let i=0; i<getCart().length; i++)  {
   totalPrice=getCart()[i].itemPrice+totalPrice
 } return totalPrice
}

function removeFromCart(item) {
for (let i=0; i<cart.length; i++)  {
  if (getCart()[i].itemName===item) {
    cart.splice([i],1)
    return cart
  }
} return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
    if (cardNumber)  {
  const totalCart=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart=[]
  return totalCart
} 
  return 'Sorry, we don\'t have a credit card on file for you.' 
}




