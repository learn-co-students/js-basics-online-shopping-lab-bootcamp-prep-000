var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { [item]: Math.floor(Math.random() *100)};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var list = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    list += `${(Object.keys(cart[0]))[0]} at $${(Object.values(cart[0]))[0]}.`;
    console.log(list);
  } else if (cart.length === 2) {
    list += `${(Object.keys(cart[0]))[0]} at $${(Object.values(cart[0]))[0]} and ${(Object.keys(cart[1]))[0]} at $${(Object.values(cart[1]))[0]}.`;
    console.log(list);
  } else {  
    for (var i = 0; i < cart.length - 1; i++) {
      list += `${(Object.keys(cart[i]))[0]} at $${(Object.values(cart[i]))[0]}, `;
    }
    list += `and ${(Object.keys(cart[cart.length - 1]))[0]} at $${(Object.values(cart[cart.length - 1]))[0]}.`;
    console.log(list);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt((Object.values(cart[i]))[0]);
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (parseInt(cardNumber) > 0) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += parseInt((Object.values(cart[i]))[0]);
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
