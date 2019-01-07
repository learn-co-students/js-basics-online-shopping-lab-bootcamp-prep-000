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



var getCart = function() {
    return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100)
    cart.push({ [item]: price })
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
    var tempCart = [];
    var l = cart.length;

    if( l > 0 ) {
        for( let i =0; i < l; i++) {
            let itemPrice = cart[i];
            let item = Object.keys(itemPrice)[0];
            let price = itemPrice[item];
            tempCart.push(`${item} at \$${price}`);
        }
        console.log(`In your cart, you have ${tempCart.join(", ")}.`)
    }
    else {
        console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item) {
    var check = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      check = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!check) {
    console.log("That item is not in your cart.")
  }

  return cart
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
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
