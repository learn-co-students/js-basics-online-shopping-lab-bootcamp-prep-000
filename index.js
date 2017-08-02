var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var object = {[itemName] : itemPrice};
  console.log(`${itemName} has been added to your cart.`);
  cart.push(object);
  return cart;
}

function viewCart() {

  let itemsAndPrices = [];

  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }


  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at \$${getCart()[0][Object.keys(getCart()[0])[0]]} and ${Object.keys(getCart()[1])[0]} at \$${getCart()[1][Object.keys(getCart()[1])[0]]}.`);
  } else {
      itemsAndPrices[cart.length-1] = "and ".concat(itemsAndPrices[cart.length-1]);
      itemsAndPrices = itemsAndPrices.join(", ");

      console.log(`In your cart, you have ${itemsAndPrices}.`);
    }
}

function total() {
  var total = 0;

  for (let i = 0; i < cart.length; i++){
    total = total + cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var inCart = false;

  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (inCart === false){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
