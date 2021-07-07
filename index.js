var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * (100));
 cart.push({[item]: itemPrice});
    console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  const l = cart.length;
    if (!l) {
      return console.log("Your shopping cart is empty.");
    }

    let itemsAndPrices = [];

    //The following code loops over the cart and separates items and prices.
    for (let i = 0; i < l; i++) {
      let itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];

//The following adds the appropriate phrase to the array itemsAndPrices.
      itemsAndPrices.push(`${item} at \$${price}` )
    }
switch(itemsAndPrices.length) {
  case 1:
    break;
  case 2:
    itemsAndPrices = itemsAndPrices.join(" and ");
    break;
  default:
    itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
    itemsAndPrices = itemsAndPrices.join(", ");
}

return console.log(`In your cart, you have ${itemsAndPrices}.`)

    }

function total() {
  let itemsAndPrices = [];
  var priceTotal = 0;

  for (let i = 0; i < cart.length; i++) {

    let itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    priceTotal += itemAndPrice[item];

  }
  return priceTotal;
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
          cart.splice(i, 1);
        }
    } console.log('That item is not in your cart.')
    return cart;
}

function placeOrder(cardNumber) {
    if (!cardNumber) {
      console.log('Sorry, we don\'t have a credit card on file for you.');
    } else {
      var finalTotal = total();
      console.log(`Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`)
    }
    return cart = [];
}
