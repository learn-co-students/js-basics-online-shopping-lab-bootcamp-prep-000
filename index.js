let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.round(Math.random() * 100);
  cart.push({[item]: itemPrice});
  console.log(`${[item]} has been added to your cart.`);
  return cart
}

function viewCart() {

  if (!cart[0]){
    console.log("Your shopping cart is empty.");
  }

  let cartWindow = []

  for (let i = 0; i < cart.length; i++) {
    cartWindow.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
  }

  //By this step, cartWindow = [`apples at $1` , `bananas at $2`]
  switch (cartWindow.length) {
    case 1:
      break;
    case 2:
      cartWindow = cartWindow.join(" and ")
      break;
    default:
      let lastItem = cartWindow[cartWindow.length - 1]
      cartWindow[cartWindow.length - 1] = `and ${lastItem}`
      cartWindow = cartWindow.join(", ")
  }
  console.log(`In your cart, you have ${cartWindow}.`)
}

// //FOR LOOP VERSION
//   for (let i = 0; i < cart.length; i++) {
//     if (cart.length === 1) {
//       cartWindow.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
//       cartWindow.join();
//     }
//     else if (i === cart.length) {
//       cartWindow.push(`and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
//       cartWindow.join();
//     }
//     else {
//       cartWindow.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}, `);
//       cartWindow.join()
//     }

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0]
  }
  return total
}

function removeFromCart(item) {
  let itemCheck = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      itemCheck = true
    }
  }
  if (!itemCheck) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
