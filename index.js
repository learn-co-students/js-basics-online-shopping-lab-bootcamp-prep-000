var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[itemName]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var finalArray = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];
       finalArray.push(`${item} at $${price}`)
    }
    if (cart.length === 1) {
      console.log('In your cart, you have ' + finalArray + '.')
    } else if (cart.length === 2) {
      console.log('In your cart, you have ' + finalArray.join(' and ') + '.')
    } else {
      finalArray[cart.length -1] = 'and '.concat(finalArray[cart.length -1])
      finalArray= finalArray.join(', ')

    }
    console.log('In your cart, you have ' + finalArray + '.')
}

function total() {
  var finalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
    finalPrice += price;
  }
  return finalPrice
}

function removeFromCart(item) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    if (itemAndPrice.hasOwnProperty(item)) {
      inCart = true;
      delete itemAndPrice[item];
      console.log(cart)
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      //return cart;
     }
    }
    if (inCart === false){
      console.log('That item is not in your cart.')
      //return cart;
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  for (var i = 0; i < cart.length; i++) {
    cart = cart.slice(i, cart.length -1);
  }
  return cart;
}
