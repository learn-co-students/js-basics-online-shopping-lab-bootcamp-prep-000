var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 function getRandomInt(max = 100) {
   return Math.floor(Math.random() * Math.floor(max))
 }

 const currentItem = {
   itemName: item,
   itemPrice: getRandomInt()
 }

 const currentCart = getCart()
 currentCart.push(currentItem)

 const itemAddedMessage = `${currentItem.itemName} has been added to your cart.`

 return itemAddedMessage
}

function viewCart() {
  // write your code here
   const currentCart = getCart()

   if (currentCart.length === 0) {
     return "Your shopping cart is empty."
   }

   const itemMessages = []

   for (let i = 0; i < currentCart.length; i++) {
     itemMessages.push(`${currentCart[i].itemName} at $${currentCart[i].itemPrice}`)
   }

   if (currentCart.length >= 2) {
     var lastItemMessage = itemMessages[itemMessages.length - 1];
     itemMessages.splice(-1, 1, `and ${lastItemMessage}`);
   }

   const currentCartMessage = `In your cart, you have ${itemMessages.join(", ")}.`

   return currentCartMessage
}

function total() {
  // write your code here
  const currentCart = getCart()
  let currentTotal = 0;

  for (let i = 0; i < currentCart.length; i++) {
    currentTotal += parseInt(currentCart[i].itemPrice, 10)
  }

  return currentTotal
}

function removeFromCart(item) {
  // write your code here
  const currentCart = getCart()
  let itemRemoveIndex

  for (let i = 0; i < currentCart.length; i++) {
    if (currentCart[i].itemName === item) {
      itemRemoveIndex = i
    }
  }

  if (!itemRemoveIndex) {
    return "That item is not in your cart."
  }

  const updatedCart = currentCart.splice(itemRemoveIndex, 1)

  return updatedCart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }

  const totalCharge = total()
  const orderMessage = `Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`

  setCart([])

  return orderMessage
}
