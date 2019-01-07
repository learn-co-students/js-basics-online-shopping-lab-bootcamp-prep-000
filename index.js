var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: parseInt(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
  console.log(`Your shopping cart is empty.`);
  }
  let items = [];

  if (cart.length < 3) {
    for (let i in cart) {
      let item = Object.keys(cart[i]);
      let price = cart[i][item];
      items.push(`${item} at \$${price}`);
    }
  console.log(`In your cart, you have ${items.join(' and ')}.`);
  } else {
      for (let i in cart) {
       let item = Object.keys(cart[i]);
       let price = cart[i][item];
       items.push(`${item} at \$${price}`);
      }
    console.log(`In your cart, you have ${items.splice(0, items.length -1 ).join(', ')}, and ${items[items.length -1]}.`)
 }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length ; i++) {
    for (let j in cart[i]) {
    total += cart[i][j]
    }
  } return total;
}

function removeFromCart(item) {
  for (let i = 0 ; i < cart.length ; i++) {
    if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
    }
  } console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
   }
}
