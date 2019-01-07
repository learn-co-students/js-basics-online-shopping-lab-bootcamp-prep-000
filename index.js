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
 var newObj = Object.assign({}, {[item]: Math.floor(Math.random() * 100)});
 cart.push(newObj);

 console.log(`${item} has been added to your cart.`);

 return cart;
}

function viewCart() {
  // write your code here
  /*var statement = '';
  if (cart.length > 0) {
    statement = 'In your cart, you have ';
    cart.forEach(function(item, i) {
      if (cart.length === 1) {
        for (var k in item) {
          statement += `${k} at $${item[k]}.`;
        }
      } else if (i < cart.length - 2) {
        for (var k in item) {
          statement += `${k} at $${item[k]}, `;
        }
      } else if (i === cart.length - 2 && cart.length === 2) {
        for (var k in item) {
          statement += `${k} at $${item[k]} `;
        }
      } else if (i === cart.length - 2 && cart.length > 2) {
        for (var k in item) {
          statement += `${k} at $${item[k]}, `;
        }
      } else {
        for (var k in item) {
          statement += `and ${k} at $${item[k]}.`;
        }
      }
    });
  } else {
    statement = 'Your shopping cart is empty.';
  }
  console.log(statement);*/

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }

  var itemsAndPrices = [];

  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0]; // this really assumes there is only one key value pair, or it's the first key value pair I am interseted in
    var price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  if (cart.length > 2) {
    itemsAndPrices[cart.length - 1] = "and ".concat(itemsAndPrices[cart.length - 1]);
    itemsAndPrices = itemsAndPrices.join(', ');
  } else if (cart.length === 2) {
    itemsAndPrices = itemsAndPrices.join(' and ');
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`)
}

function total() {
  // write your code here
  var total = 0;

  cart.forEach(function(item) {
      for (var k in item) {
        total += item[k];
      }
  });

  return total;
}

function removeFromCart(item) {
  // write your code here
  /*if (item && item !== null && item !== undefined) {
    var count = 0;

    cart.forEach(function(cartItem, i) {
      for (var k in cartItem) {
        if (k === item) {
          delete cart[i];
        }
      }
      count++;
    });

    if (count === cart.length) {
      console.log('That item is not in your cart.');
    }
  }*/
  var itemInCart = false;

  cart.forEach(function(cartItem, i) {
    if (cartItem.hasOwnProperty(item)) {
      //delete cart[i];
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      itemInCart = true;
    }
  });

  if (!itemInCart) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var total = 0;

  cart.forEach(function(item) { // had to be put separetly, uable to call total() ???
      for (var k in item) {
        total += item[k];
      }
  });

  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
  }

  // delete cart not possible?

  /* cart.forEach(function(item) { // had to be put separetly, uable to call total() ???
      delete item;
  }); why not?*/

  cart = []
}

addToCart('mango');
addToCart('nuts');
addToCart('quince');
viewCart();

removeFromCart('mango');
viewCart();
