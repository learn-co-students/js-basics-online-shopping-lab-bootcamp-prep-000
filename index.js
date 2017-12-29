var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart

}

addToCart('apple');
addToCart('pomes de terre');
addToCart('pinapple');
//addToCart('coconut');

function viewCart() {
  switch (cart.length) {
    case 0:
      console.log('Your shopping cart is empty.')
      break;
    case 1:
      var item = Object.keys(cart[0]);
      var price = cart[0][item];
      console.log(`In your cart, you have ${item} at \$${price}.`)
      break;

    case 2:
      var keys = [], prices = [];
      for (var i in cart) {
        var key = Object.keys(cart[i])[0];
        keys.push(key);
        prices.push(cart[i][key])
      }
      console.log(`In your cart, you have ${keys[0]} at \$${prices[0]} and ${keys[1]} at \$${prices[1]}.`);
      break;
    default:
      var keys = [], prices = [];

      for (var i in cart) {
        var key = Object.keys(cart[i])[0];
        keys.push(key);
        prices.push(cart[i][key])
      }


      var len = cart.length;
      var messages = [];
      for (var i = 0; i < len; i++) { //minus 1 to exclude the last element
        if(i == len - 1){
          messages.push(`and ${keys[i]} at \$${prices[i]}`);
        } else {
          messages.push(`${keys[i]} at \$${prices[i]}`);
        }

      }
      console.log(`In your cart, you have ${messages.join(', ')}.`);
      break;
  }

}

viewCart();
function total() {
  var sum = 0;
  for (var i in cart) {
    var obj = cart[i];
    var key = Object.keys(obj)[0];
    sum += obj[key];
  }
  return sum
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    }
  }
  console.log('That item is not in your cart.')
}


function placeOrder(cardNumber) {
  // if (cardNumber === undefined) {
  //   console.log("Sorry, we don't have a credit card on file for you.")
  // } else {
  //   console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  //   cart = [];
  // }

  if (cardNumber) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
