var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
  var itemAndPrice = [];
  for (var i = 0; i < cart.length; i++) {
    itemAndPrice.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
  } if (itemAndPrice.length < 3) {
    console.log(`In your cart, you have ${itemAndPrice.join(" and ")}.`);
  } if (itemAndPrice.length >= 3) {
    console.log(`In your cart, you have ${itemAndPrice.slice(0, itemAndPrice.length - 1).join(', ')}, and ${itemAndPrice.slice(itemAndPrice.length - 1)}.`);
  }
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i ++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1);
      break
    }
  } console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length);
}
