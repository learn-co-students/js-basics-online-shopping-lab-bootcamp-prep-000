var cart = [];

var getCart = () => {
 return cart;
}

var setCart = c => {
  cart = c;
  return cart;
}

var addToCart = item => {
  cart.push({[item]: Math.ceil(100 * Math.random())});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

var viewCart = () => {
  var contents = '';

  if (cart[0] === undefined) {
    contents = 'Your shopping cart is empty.';
  }
  else {
    var key = '';
    contents = 'In your cart, you have';

    cart.forEach(function buildContentsList(item, i) {
      key = Object.keys(item)[0];

      // If cart has more than two items and i is index of second item or later, add comma
      if (cart.length > 2 && i > 0) {
        contents += ',';
      }

      // If cart has more than one item and i is index of last item, add ' and'
      if (cart.length > 1 && i === cart.length - 1) {
        contents += ' and';
      }

      contents += ` ${key} at \$${item[key]}`;
    });

    contents += '.';
  }

  console.log(contents);
}

var total = () => {
  var total = 0;

  cart.forEach(function buildTotal(item) {
    total += item[Object.keys(item)[0]];
  });

  return total;
}

function removeFromCart(item) {
  var i, itemFound = false;
  for (i = 0; undefined !== cart[i] && false === (itemFound = cart[i].hasOwnProperty(item)); i++);

  if (itemFound) {
    cart.splice(i, 1);
  }
  else {
    console.log('That item is not in your cart.');
  }

  return cart;
}

var placeOrder = cardNumber => {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
