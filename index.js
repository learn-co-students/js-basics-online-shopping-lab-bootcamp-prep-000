var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

// output = Object.keys(cart[0]) + " at $" + Object.values(cart[0]);

// function viewCart() {
//   let output = "";
//   if (cart.length == 0) {
//     return 'Your shopping cart is empty.';
//   } else {
//     for (let i = 0; i < cart.length; i++) {
//       if (cart.length >= 3 && i > 0) {
//         output += ',';
//       }
//       if (i == cart.length -1 && cart.length > 1) {
//         output += ' and'
//       }
//       output += ' ' + Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])];
//       if (cart.length == 1) {
//         return 'In your cart, you have' + output +'.';
//       }
//     }
//   }
//   return 'In your cart, you have' + output + '.';
// }

function viewCart() {
  let output = "";
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
    return 'Your shopping cart is empty.';
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart.length >= 3 && i > 0) {
        output += ',';
      }
      if (i == cart.length -1 && cart.length > 1) {
        output += ' and'
      }
      output += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
      if (cart.length == 1) {
        console.log('In your cart, you have' + output +'.');
        return 'In your cart, you have' + output +'.';
      }
    }
  }
  console.log('In your cart, you have' + output +'.');
  return 'In your cart, you have' + output + '.';
}



function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += + parseInt(cart[i][Object.keys(cart[i])]);
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  if (typeof(cardNumber) === "number") {
    let cartTotal = total();
    cart = [];
    return console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
}
