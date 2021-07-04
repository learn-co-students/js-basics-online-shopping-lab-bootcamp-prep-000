var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const itemPrice = Math.floor(Math.random()*100) + 1;

cart.push({ [item]: itemPrice });
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if(!cart.length){
    console.log("Your shopping cart is empty.");
  }

  var itemsAndPrices = [];

  for (let i = 0; i < cart.length; i++){
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let itemPrice = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${itemPrice}`);
  }

  switch(itemsAndPrices.length){
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[cart.length - 1] = "and ".concat(itemsAndPrices[cart.length - 1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
    total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  let itemInCart = false;
  let l = cart.length;
  for(let i = 0; i < l; i++){
    if(cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if(!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
