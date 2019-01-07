var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100) + 1;
  let newItem = {};
  newItem[item] = price;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else {
    let cartContents = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i]);
      let price = Object.values(cart[i]);
      if (i === cart.length-1){
        cartContents += `and ${item} at $${price}.`;
      } else {
        cartContents += `${item} at $${price}, `;
      }
    }
    console.log(cartContents);
  }
}

function total() {
  let currentTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    currentTotal += parseInt(Object.values(cart[i]));
  }
  return currentTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}
