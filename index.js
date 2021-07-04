var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemName = `${item}`;

  var itemPrice = Math.floor(Math.random() * 98) + 1;

  var itemObj = { [itemName]: itemPrice };

  cart.push(itemObj);

  console.log(`${item} has been added to your cart.`)

  return cart;

}

function viewCart() {

  if (cart.length === 1) {

    var tempCart = cart.slice(0, cart.length);

    var itemObj = tempCart.shift();

    var item = Object.keys(itemObj);

    var price = itemObj[item];

    console.log(`In your cart, you have ${item} at $${price}.`);

  } else if (cart.length === 2) {

    var tempCart = cart.slice(0, cart.length);

    var itemObjOne = tempCart.shift();

    var itemOne = Object.keys(itemObjOne);

    var priceOne = itemObjOne[itemOne];

    var itemObjTwo = tempCart.shift();

    var itemTwo = Object.keys(itemObjTwo);

    var priceTwo = itemObjTwo[itemTwo];

    console.log(`In your cart, you have ${itemOne} at $${priceOne} and ${itemTwo} at $${priceTwo}.`);

  } else if (cart.length > 2) {

      var tempCart = cart.slice(0, cart.length);

      var items = [];

      var prices = [];

      var cartText = [];

      for (var k = 0; k < cart.length; k++) {

        var itemObj = tempCart.shift();

        items.push(Object.keys(itemObj));

        prices.push(itemObj[items[k]]);

      }

      function returnPair(length) {

        for (var j = 0; j < length - 1; j++) {

          cartText[j] = ` ${items.shift()} at $${prices.shift()}`;

        }


        cartText.push(` and ${items.shift()} at $${prices.shift()}.`);

        return cartText;

        }

    console.log(`In your cart, you have${returnPair(cart.length)}`);

  } else {

    console.log('Your shopping cart is empty.');
  }
}

function total() {
  var tempCart = cart.slice(0, cart.length);

  var prices = [];

  var items = [];

  var subTotal = 0;

  for (var i = 0; i < cart.length; i++) {

    var itemObj = tempCart.shift();

    items.push(Object.keys(itemObj));

    prices.push(itemObj[items[i]]);

  }

  for (var j = 0; j < prices.length; j++) {

    subTotal = parseInt(prices[j]) + subTotal;

  }

  return subTotal;

}

function removeFromCart(item) {

  var ogLength = cart.length;

  for (var m = 0; m < cart.length; m++) {

    var tempCart = cart.slice(m,cart.length);

    var itemObj = tempCart.shift();

    var itemObjKey = Object.keys(itemObj);

    if (itemObjKey[0] === item) {

      cart.splice(m, 1);

    }

  }

  if (cart.length === ogLength) {

    console.log("That item is not in your cart.");

  } else {

      return cart;

  }


}

function placeOrder(cardNumber) {

  if ( cardNumber === undefined) {

    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

    cart.splice(0);


  }
}
