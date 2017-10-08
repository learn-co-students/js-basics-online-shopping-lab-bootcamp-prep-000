var cart = [];

function setCart(c) {
  cart = c;
  return cart;
}

function getCart() {
 return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random()*99 + 1);
  cart.push({[item]: itemPrice});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  };

  var string = "In your cart, you have ";
  if (cart.length === 1) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
  } else if (cart.length === 2) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      var text;
      if (i === cart.length - 2) {
        text = ", and ";
      } else if (i === cart.length - 1) {
        text = "";
      } else {
        text = ", ";
      };
      string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    };
  };
  return console.log(string);
};

function total() {
  var t = 0;
  for (let i=0; i<cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    t += cart[i][key]
  }
  return t;
}

function removeFromCart(item) {
  for(let i =0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(num) {
  if (!num) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`);
  cart = [];
}
