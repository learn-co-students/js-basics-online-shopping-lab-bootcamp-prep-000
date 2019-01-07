var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log (`${item} has been added to your cart.`)
  
  return cart
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsWithPrices = [];

  for (let i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    var itemPrice = cart[i][itemName]

    itemsWithPrices.push(`${itemName} at $${itemPrice}`)
  }

  if (itemsWithPrices.length === 1) {
    return console.log(`In your cart, you have ${itemsWithPrices.join()}.`)
  } else if (itemsWithPrices.length === 2) {
    return console.log(`In your cart, you have ${itemsWithPrices[0]} and ${itemsWithPrices.slice(-1)}.`)
  } else {
    return console.log(`In your cart, you have ${itemsWithPrices.slice(0,-1).join(', ')}, and ${itemsWithPrices.slice(-1)}.`)
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    alert (itemNames);
    var itemName = itemNames[0];
    total += parseInt(cart[i][itemName], 10);
  }
  
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
    return cart.splice(i, 1)
    } 
  }
  console.log (`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log (`Sorry, we don't have a credit card on file for you.`);
  }
  if (cardNumber !== undefined) {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}