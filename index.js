var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(itemName) {
  const price = Math.floor(Math.random()*100);

  const item = {};
  item[itemName] = price;

  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {

    const cartListing = getCart()
                          .map((item) => Object.keys(item).map((key) => `${key} at $${item[key]}`) )
                          .join(", ");

    console.log(`In your cart, you have ${cartListing}.`)
  }
}

function removeFromCart(itemName) {
  /* // uglier solution
  for (let i in cart) {
    const item = cart[i];
    if (item.hasOwnProperty(itemName)) {
      cart.splice(i, 1);
      return;
    }
  }*/
  // prettier solution
  let updatedCart = cart.filter((item) => !item.hasOwnProperty(itemName));
  if (updatedCart.length === cart.length) {
    console.log("That item is not in your cart.");
    return;
  }
  setCart(updatedCart);
}

function placeOrder(creditCardNumber) {
  if (typeof creditCardNumber === "undefined" ||  creditCardNumber === null) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  setCart([]);
}
