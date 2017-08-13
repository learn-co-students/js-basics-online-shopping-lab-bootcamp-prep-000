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
  var itemPrice = Math.floor(Math.random() * 100)
  cart.push({[itemName]: itemPrice})

    if (cart.length > 0) {
      console.log(itemName + ' has been added to your cart.')
    }

      return cart




}

function viewCart() {
  // write your code here
  var items = []

    if (cart.length === 0) {
        console.log('Your shopping cart is empty.')
  }

    else  {

      for (var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
          items.push(`${item} at $${cart[i][item]}`)
          }
      }
           if (items.length === 1) {
            console.log(`In your cart, you have ${items}.`)
        }
           else if (items.length === 2) {
             console.log(`In your cart, you have ${items[0]} and ${items[1]}.`)
           }

           else if (items.length >= 3){
             console.log(`In your cart, you have ${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}.`)
           }


    }

}



function total() {
  // write your code here
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      totalCost += cart[i][itemName]
    }

  }
    return totalCost
}

function removeFromCart(itemName) {
  // write your code here

  for (var i = 0; i < cart.length; i++) {


    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1)
      return cart

    }
 }

   console.log('That item is not in your cart.')
   return cart

}
function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total()
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  while (cart.length) {
    cart.pop()
  }
}
