var cart = [];

function addToCart(item) {
  var newObj = {};
  newObj[item] = Math.floor(Math.random()*100);
  cart.push(newObj);
  console.log(item + ' has been added to your cart.')
  return cart;
}

function viewCart() {
  var arr = [];

  if (cart.length >= 3) {
    for (let i = 0; i < cart.length; i++) {
      if (i !== cart.length - 1) {
        for (var name in cart[i]) {
          arr[i] = name + ' at $' + cart[i][name]
        }
      } else {
        for (var name in cart[i]) {
          arr[i] = 'and ' + name + ' at $' + cart[i][name]
        }
      }
    }
    console.log('In your cart, you have ' + arr.join(', ') + ".")

  } else if (cart.length == 2) {
    for (var name in cart[0]) {
      arr[0] = name + ' at $' + cart[0][name]
    }
    for (var name in cart[1]) {
      arr[1] = name + ' at $' + cart[1][name]
    }
    console.log('In your cart, you have ' + arr.join(' and ') + ".")

  } else if (cart.length == 1) {
    for (var name in cart[0]) {
      console.log('In your cart, you have ' + name + ' at $' + cart[0][name] + '.');
    }

  } else {
    console.log("Your shopping cart is empty.")
  }

}

// addToCart("orange");
// addToCart("pear");
// addToCart("quince");
// viewCart();


//In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.

// addToCart("lemons");
// addToCart("oranges");
// addToCart("bananas");
// viewCart();
// placeOrder(71338211);
// function currentLine(line) {
//   if (!line.length) {
//     return "The line is currently empty."
//   }
//
//   const numbersAndNames = []
//
//   for (let i = 0, l = line.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`)
//   }
//
//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    for (var name in cart[i]) {
      total += cart[i][name];
    }
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }

  }
  console.log("That item is not in your cart.")
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + ".")
    cart = [];
  }
  console.log("Sorry, we don't have a credit card on file for you.")
}

// Don't adjust these function!!!

function getCart(item) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
