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
 let itemName = item
 let itemPrice = Math.floor(Math.random() * 100) + 1;
 let items = { [itemName]: itemPrice };

 cart.push(items)

 console.log(`${itemName} has been added to your cart.`)

 return cart

}


function viewCart() {
  // write your code here
  let list = [];

  for (let i = 0; i < cart.length; i++) {
    list.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
  }

  if (cart.length === 0) {
    console.log ('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    console.log (`In your cart, you have ${list}.`)
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${list.join(' and ')}.`)
  } else if (cart.length >= 3) {
    console.log (`In your cart, you have ${list.slice(0, -1).join(', ') + ', and ' + list.slice(-1)}.`);
  }

}


function total() {
  // write your code here
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i ++) {
    totalPrice += parseInt(`${Object.values(cart[i])}`)
    }

  return totalPrice;

}


function removeFromCart(item) {
  // write your code here
  if (cart.length > 0){
    for (let i = 0; i < cart.length; i ++){
      if (cart[i].hasOwnProperty(item)) {
          cart.splice (i, 1);
          return cart;
      }
    }
  } else {
    console.log ("That item is not in your cart.")
  }

}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}
