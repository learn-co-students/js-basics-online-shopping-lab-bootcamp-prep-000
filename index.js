var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  let newObj = {[itemName] : Math.floor (Math.random()*100)};
  cart.push(newObj);
  console.log (`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
  console.log ("Your shopping cart is empty.");
  return;
  }
  var cartStart = 'In your cart, you have ';
  for (let i=0; i<cart.length; i++) {
     let item = cart[i];
     let itemName = Object.keys(item)[0];
     let itemPrice = Object.values(item)[0];
     cartStart +=`${itemName} at $${itemPrice}`;
     if (i === cart.length - 1){
      cartStart += '.';
    } else if (cart.length === 2) {
      cartStart += ' and ';
    } else if (i === cart.length - 2) {
      cartStart += ', and ';
    } else {
      cartStart += ', ';
    }
    console.log (cartStart);
  }
}

function total() {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
      let item = cart[i];
      total += Object.values(item)[0];
  }
   return total;
 }	 


function removeFromCart(item) {
  let success = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      success = 1;
      return cart;
    }
  }
  if (success === 0) {
    console.log("That item is not in your cart.");
    return cart;
 	 }
}


function placeOrder(cardNumber) {
  // console.log shit for fun
  console.log(`Card number: ${cardNumber}`);
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
