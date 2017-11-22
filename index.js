var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObject = {[item]: Math.floor(((Math.random() * 100) + 1))}
  cart.push(cartObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

  function viewCart() {
    var allItemsAndPrices = [];
    var allExceptLastItem = [];
    var cartArrayFinalItem = [];
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      allItemsAndPrices.push(` ${item} at $${price}`)
    }
  if (cart.length == 0) {
      console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length == 1) {
      console.log (`In your cart, you have${allItemsAndPrices}.`)
  }
  else if (cart.length == 2) {
      console.log(`In your cart, you have${allItemsAndPrices[0]} and${allItemsAndPrices[1]}.`)
  }
  else {
        for (let i = 0; i < (cart.length - 1); i++) {
        allExceptLastItem.push(allItemsAndPrices[i])
      }
      cartArrayFinalItem.push(` and${allItemsAndPrices[cart.length - 1]}`)
      console.log(`In your cart, you have${allExceptLastItem},${cartArrayFinalItem}.`)
  }
}

function total() {
  var cumulativeTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    cumulativeTotal = cumulativeTotal + price;
    }
    return cumulativeTotal
  console.log (cumulativeTotal)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i,1);
      return cart
    } else {
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
    return cart
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
    return cart
  }
}
