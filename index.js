var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * (100 - 2) + 2)
  cart.push({[item]: itemPrice})
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartLength = cart.length;
  if (cartLength > 0) {
    var cartContents = [];
    var n = 0;
    var i = cartLength-1;
    while (n < cartLength) {
        if (n === 0 && cartLength === 1) {
              let item = cart[n];
                cartContents.push(` ${Object.keys(item)} at $${item[Object.keys(item)]}.`);
                n++;
        } else if (n === i) {
          let item = cart[n];
            cartContents.push(` and ${Object.keys(item)} at $${item[Object.keys(item)]}.`);
            n++;
          } else if (cartLength === 2) {
            let item = cart[n];
            cartContents.push(` ${Object.keys(item)} at $${item[Object.keys(item)]}`);
              n++;
        } else {
          let item = cart[n];
          cartContents.push(` ${Object.keys(item)} at $${item[Object.keys(item)]},`);
          n++;
        }
        }
        console.log (`In your cart, you have${cartContents.join("")}`);
      } else {
        console.log (`Your shopping cart is empty.`);
      }
}

function total() {
  var cartLength = cart.length;
  var totalPrice = 0;
      var cartPrices = [];
      for (let n = 0; n < cartLength; n++) {
    let item = cart[n];
    cartPrices.push(`${item[Object.keys(item)]}`);
  var totalPrice = totalPrice + item[Object.keys(item)];
  }
  return totalPrice;
}



function removeFromCart(item) {
  var cartLength = cart.length;
  let match = 0;
  var index = 0;
  for (let n = 0; n < cartLength; n++) {
    let itemToCheck = cart[n];
    console.log(itemToCheck);
    var Boolean = itemToCheck.hasOwnProperty(item);
    console.log(Boolean);
    if (Boolean === true) {
      match++;
      console.log(match);
      var index = cart.indexOf(itemToCheck);
      console.log(index);
  }
}
console.log(match);
console.log(index);
  if (match === 1) {
    console.log("We found a match!");
    cart.splice(index, 1);
} else {
  console.log ("That item is not in your cart.");
}
  return cart;
}


function placeOrder(cardNumber) {
  var creditCardNumber = cardNumber
if (cardNumber === undefined) {
  console.log ("Sorry, we don\'t have a credit card on file for you.")
} else {
  var totalPrice = total()
  console.log (`Your total cost is $${totalPrice}, which will be charged to the card ${creditCardNumber}.`);
  cart = []
}
}
