
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

// set cart to empty
function clearCart() {
  cart = [];
}

// add item and price as an object to cart array
// generate random number between 0 and 100 for price
function addToCart(item) {
  // var price;
  var price = Math.floor(Math.random() * 100);
  // var newItem = {};
  // newItem[item] = price;
  // cart.push(newItem);
  cart.push({[item] : price});
  console.log(item + " has been added to your cart.")
  return cart;
}

// Is cart empty?
function isEmpty() {
  return cart.length === 0;
}


//print out all items and their prices in the cart
function viewCart() {
  if (isEmpty()) {
    console.log ("Your shopping cart is empty.");
  } else {
    var str = ``;
    var itemsAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
        var item = Object.keys(cart[i])[0] // gets the value of the first key in Object [item name]
        var price = cart[i][item];
        itemsAndPrices.push(`${item} at \$${price}`);
        // str = str + item + ' at $' + price + ', ';
        // str = str + `${item} ` +  `at \$${price}, `;
        // var str2 = str.slice(0, str.length - 3) + `.`; // returns a new string, formatted
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
    // console.log(`In your cart, you have ` + str2);
  }
}

// remove item from cart if it's in there
function removeFromCart(item) {
  var itemInCart = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${item}`)) {
        itemInCart = true;
        cart.splice(i, 1);
        // itemInCart = false;
      }
    }
      if (itemInCart === false) {
      console.log("That item is not in your cart.");
      }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  clearCart();
}

// remove item from cart
// function removeFromCart(item) {
//   var itemInCart = false;
//   if (!(cart.length === 0)) {
//     for (var i = 0; i < cart.length; i++) {
//       if (cart[i].hasOwnProperty(`${item}`)) {
//         itemInCart = true;
//         cart.splice(i, 1);
//         // itemInCart = false;
//       }
//     }
//       if (itemInCart === false) {
//       console.log("That item is not in your cart.");
//       }
//     } else {
//     console.log("Empty cart!");
//   }
//   return cart;
// }



// returns sum of prices in cart
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
