var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function randomNum() {
    return (Math.floor(Math.random() * 99));
  }
  var itemPrice = randomNum()
  cart.push( new Object({ [item] : randomNum() }) )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.') 
  } else {
    var list = 'In your cart, you have '
    for (var i = 0; i < cart.length; i++) {
      if (i === 0) {
      list += (`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
        if (cart.length === 1) {
          list += ".";
        } else if (cart.length > 2) {
          list += ","
        }
      } else if (i < cart.length - 1 && i !== 0) {
      list += (` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`);
      } else if (i === cart.length - 1){
      list += (` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)
      }
}
console.log(list)
  }
}


function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    console.log(Object.values(cart[i]))
    total += (parseInt(`${(Object.values(cart[i]))}`))
    }
  return total
}

function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i,1);
    }
  }  
  if (!itemInCart) {
  console.log('That item is not in your cart.')
  }
  return cart;  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber === null || cardNumber.length <= 0) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else if (cardNumber !== null && cardNumber !== '') {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
