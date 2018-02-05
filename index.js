var cart = []
// for testing --> var cart = [{tomato: 45}, {letuce: 30}, {jam: 10}];
const itemPrice = Math.floor(Math.random()*100);

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random()*100);
  cart.push( {[itemName]: itemPrice} )
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length === 1) {
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      const cartItems = Object.keys(cartItem);
      const cartPrices = Object.values(cartItem);
      console.log(`In your cart, you have ${cartItems[0]} at $${cartPrices[0]}.`)
    }
  } else if (cart.length === 2) {
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      const cartItems = Object.keys(cartItem);
      const cartPrices = Object.values(cartItem);
      console.log(`In your cart, you have ${cartItems[0]} at $${cartPrices[0]} and ${cartItems[1]} at $${cartPrices[1]}.`)
    }
  } else {
    console.log(`In your cart, you have ${cartItems[0]} at $${cartPrices[0]} and ${cartItems[1]} at $${cartPrices[1]}.`)
  }
}


function total() {
  // need to get all the prices
  let cartPrices = []
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    for (let j = 0; j < cartItem.length; j++) {
    let cartPrice = Object.values(cartItem[j])
    cartPrices.push(cartPrice);
    }
  }
  console.log(cartPrices);
  // then need to add all of them up
  // const sumOfPrices = cartPrices.reduce(function(a, b) {
  //   return a + b;
  // }, 0);
}

function removeFromCart(item) {
  if (item !== ) {

  }
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  return cart = [];
  console.log(`Your total cost is ${totalPrice}, which will be charged to the card ${cardNumber}. `)
}
