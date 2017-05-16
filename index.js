var cart = [];

function getCart(){
  return cart;
}


function addToCart(item){
   let rand = Math.random() * 100;
   let price = Math.floor(rand);
   cart.push({ [item]: price })
   //cart[item] = price;
   console.log(`${item} has been added to your cart.`);
   return cart;
}


function viewCart() {
  const l = cart.length;

  if (l === 0) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
  //return itemsAndPrices;
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(ccNumber){
  if (!ccNumber){
    return console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccNumber}.`);
  cart = [];
}


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
