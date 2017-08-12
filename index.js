var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100+1)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  const length = cart.length
  if (length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  else {
  let shoppingList = []

  for (let i = 0; i < length; i++) {
    let itemInfo = cart[i]
    let item = Object.keys(itemInfo)[0]
    let price = itemInfo[item]
    shoppingList.push(`${item} at \$${price}`)
    }

    switch(shoppingList.length) {
      case 1:
        break;
      case 2:
        shoppingList = shoppingList.join(" and ");
        break;
      default:
        shoppingList[shoppingList.length - 1] = `and ${shoppingList[shoppingList.length -1]}`
        shoppingList = shoppingList.join(", ")
        break;
    }
    return console.log(`In your cart, you have ${shoppingList}.`)
  }
}

function total() {
  let totalPrice = 0
  cart.forEach(function(item) { //iterate through each value of the cart and push its price
    for (var key in item) totalPrice += (item[key])
  })
  return totalPrice
  }


function removeFromCart(item) {
  let itemFound = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      itemFound = true;
    }
  }
  if (itemFound) {
    return cart
    }
  else {
    console.log("That item is not in your cart.")
    return cart
    }
  }

function placeOrder(cardNumber) {
  let cartItems = [];
  for (let i = 0; i < cart.length; i++) {
    cartItems.push(Object.keys(cart[i])[0])
  }
  if (! cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    let totalPrice = total()
    console.log(`Your total cost is \$${totalPrice}, which will be charged to the card ${cardNumber}.`)
    cartItems.forEach(function(element) {
      removeFromCart(element)
    })
  }
}
