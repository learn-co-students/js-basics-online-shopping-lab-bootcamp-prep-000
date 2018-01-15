var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var nameAndPrice = {};
 nameAndPrice[item] = Math.floor(Math.random()*100);
 cart.push(nameAndPrice);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
  }
  else {
    var itemAndPrice = [];
    for (var i=0; i<(cart.length-1); i++) {
      itemAndPrice.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
    }
    console.log(`In your cart, you have${[itemAndPrice].join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`);
  }
}

function total() {
  var cost = [];
    for (let i=0; i<cart.length; i++){
      cost.push(parseInt(Object.values(cart[i])));
  }
  var sum = cost.reduce(add,0);
  function add(a,b) {
    return (a+b);
  }
  return sum;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
    }
  }
  if (cart.hasOwnProperty(item) === false){
    console.log("That item is not in your cart.");
  }
    
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

