var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = getRandomIntInclusive(1, 100);
  var itemObject = {[itemName]: itemPrice};
  cart.push(itemObject);
  console.log(itemName + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    var itemName = Object.keys(cart[0])
    console.log(`In your cart, you have ${itemName} at \$${cart[0][itemName]}.`)
  } else if (cart.length === 2) {
    var itemName1 = Object.keys(cart[0])
    var itemName2 = Object.keys(cart[1])
    console.log(`In your cart, you have ${itemName1} at \$${cart[0][itemName1]} and ${itemName2} at \$${cart[1][itemName2]}.`)
  } else {

    var itemsAndPrices = [];

    for (var i = 0; i < cart.length; i++) {
      let itemsAndPrice = cart[i]
      let item = Object.keys(itemsAndPrice)
      let price = itemsAndPrice[item]
      if (i === cart.length - 1) {
        itemsAndPrices.push(`and ${item} at \$${price}`)
      } else {
        itemsAndPrices.push(`${item} at \$${price}`)
      }
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
    }

  }

function total() {
  let totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    let itemsAndPrice = cart[i]
    let item = Object.keys(itemsAndPrice)
    let price = itemsAndPrice[item]
    totalPrice += price
  }
  return totalPrice
}

function removeFromCart(item) {
  let itemInCart = false

  for (var i = 0; i < cart.length; i++ ) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
};

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
