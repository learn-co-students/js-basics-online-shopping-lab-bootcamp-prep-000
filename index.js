let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random()*100) + 1;
  cart.push({[itemName]:itemPrice});
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];
  for (let i = 0;i < cart.length;i++) {
    let itemsAndPrice = cart[i];
    let item = Object.keys(itemsAndPrice)[0];
    let price = itemsAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`);
  }
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
    break;
    default:
    itemsAndPrices[cart.length-1] = "and ".concat(itemsAndPrices[cart.length-1]);
    itemsAndPrices = itemsAndPrices.join(", ");
  }
  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
  let t = 0;
  for (let i =0;i<cart.length;i++) {
    for (let item in cart[i]) {
      t+= cart[i][item];
    }
  }
  return t;
}

function removeFromCart(item) {
  // write your code here
  let itemInCart = false;

  for (let i = 0, l=cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0,i).concat(cart.slice(i+1));
      l--;
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
