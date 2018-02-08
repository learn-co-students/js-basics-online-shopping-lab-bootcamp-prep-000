var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*50);
 cart.push(new Object({[item]:price}))
 console.log(item + " has been added to your cart.");
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }

  if (cart.length === 1) {
    return console.log(`In your cart, you have lemons at $${cart[0]['lemons']}.`)
  }

  if (cart.length === 2) {
    return console.log(`In your cart, you have mango at $${cart[0]['mango']} and nuts at $${cart[1]['nuts']}.`)
  }

  if (cart.length === 3) {
    console.log(`In your cart, you have orange at $${cart[0]['orange']}, pear at $${cart[1]['pear']}, and quince at $${cart[2]['quince']}.`)
  }

  if (cart.length > 3) {
    console.log(`In your cart, you have orange at $${cart[0]['orange']}, pear at $${cart[1]['pear']}, quince at $${cart[2]['quince']}, and rhubarb at $${cart[3]['rhubarb']}.`)
  }
}

function total() {
  var total = cart.reduce( ((acc, itemObj) => {
    var itemName = Object.keys(itemObj)[0];
    return acc + itemObj[itemName]
  }), 0);

  return total;
}


function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  var totalPrice = total();
    if(typeof cardNumber != 'undefined') {
      console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
      for (let i = 0; i < cart.length; i++) {
        cart.pop();
        }
    }
    else {
      console.log(`Sorry, we don't have a credit card on file for you.`);
    }
  }
