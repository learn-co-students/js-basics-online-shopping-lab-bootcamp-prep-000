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
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var obj = {[item]: itemPrice};
 cart.push(obj)
  console.log(item + " has been added to your cart.");
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
  console.log ("Your shopping cart is empty.")
} 
  for (let i = 0; i < items.length; i++)
  cart.push(`In your cart ${item} at ${itemPrice[i]}`);
  return cart
}

 function total() {
  // write your code here
  let t = 0;

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
 }

function removeFromCart(item) {
  // write your code here
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
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
 }
