var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {[item]: Math.floor(Math.random()*100)};
 console.log(`${item} has been added to your cart.`);
 cart.push(newItem);
 return cart;
}


function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  let cartContent = "In your cart, you have ";
  const firstKey = Object.keys(cart[0]);
  const firstPrice = cart[0][firstKey];
  cartContent += `${firstKey} at $${firstPrice}`;

  if (cart.length === 1) {
    console.log(`${cartContent}.`);
  } else if (cart.length === 2) {
    const secondKey = Object.keys(cart[1]);
    const secondPrice = cart[1][secondKey];
    console.log(`${cartContent} and ${secondKey} at $${secondPrice}.`)
  } else {
    for (let i = 1; i < cart.length - 1; i++) {
      const iKey = Object.keys(cart[i]);
      const iPrice = cart[i][iKey];
      cartContent += `, ${iKey} at $${iPrice}`;
    }
    const lastKey = Object.keys(cart[cart.length-1]);
    const lastPrice = cart[cart.length-1][lastKey];
    console.log(cartContent + `, and ${lastKey} at $${lastPrice}.`);
  }
};

cart = [{orange: 97}, {pear: 86}, {quince: 63}];
viewCart();

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    const iKey = Object.keys(cart[i]);
    const iPrice = cart[i][iKey];
    total += iPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

placeOrder();
placeOrder(123456);
