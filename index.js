var cart = [];

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

function addToCart(item) {
  let price = Math.random() * 100;
  while (price === 0) price = Math.random() * 100;
  let priceInt = Math.floor(price);
  cart.push( {[item]: priceInt} );
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemPriceArray = [];
    for (let i = 0; i < cart.length; i++) {
      let itemObject = cart[i];
      let item = Object.keys(itemObject)[0];
      itemPriceArray.push(`${item} at $${itemObject[item]}`);
    }
    console.log(`In your cart, you have ${itemPriceArray.join(", ")}.`);
  }
}

function removeFromCart(item) {
  for(let i= 0; i < cart.length; i++) {
    let objectChecked = cart[i];
    if (objectChecked.hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
console.log("That item is not in your cart.") ;
return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
