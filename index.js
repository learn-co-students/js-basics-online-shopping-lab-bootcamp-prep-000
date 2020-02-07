var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item] : price })
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  const l = cart.length

  if (l === 0) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

if(l === 1) {
    console.log(`In your cart, you have ${itemsAndPrices}.`)
  }
  else if (l === 2) {
  console.log(`In your cart, you have ${itemsAndPrices.join(' and ')}.`)
  }
  else if (l > 2) {
    itemsAndPrices[l - 1] = `and ${itemsAndPrices[l - 1]}`;
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}
}

function total() {
 let t = 0

 for(var i = 0, l = cart.length; i < l; i++) {
   for(var item in cart[i]) {
  t += cart[i][item]
   }

 }
 return t
}

function removeFromCart(item) {

    for (let i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
    }
    return  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var emptyArray = [];
  if (cardNumber === undefined) {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart(emptyArray)

}
  }
