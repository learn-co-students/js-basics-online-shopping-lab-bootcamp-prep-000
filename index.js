console.log("this is the start")
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log("this is addToCart")
 // write your code here
  var newItem = { [item]: Math.floor(Math.random() * 20) + 1 }
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
  const l = cart.length
  let total = 0
  if (!l) {
    return total
  }
  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    total = total + parseInt(price)
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  let l = cart.length
  let inCart = false;
  if (!l) {
    console.log("That item is not in your cart.")
  }
  else if(l >= 1)
  for (let i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
