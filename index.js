var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
  return cart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100 + 1);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
    let cartItems = "";
    let numItems = cart.length;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            for (var item in cart[i]) {
                if (numItems > 1) {
                    cartItems += `${item} at $${cart[i][item]}, `;
                    --numItems;
                }
                else {
                    cartItems += `${item} at $${cart[i][item]}.`;
                }
            }
        }
        console.log("In your cart, you have " + cartItems);
    }
    else {
        console.log("Your shopping cart is empty.");
    }
};

// for some reason the console.log statment would not execute
// with an else according to the error i was getting. worked in
// visual studio with a simple else statement yet not in the learn
// IDE.
function removeFromCart(item) {
  let flag = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            delete cart[i];
            cart = cart.filter(e => String(e).trim());
            flag = true;
        }
    }
    if (!(flag)) {
    console.log("That item is not in your cart.");
  }
};

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
