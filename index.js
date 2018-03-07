var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var item = {};
 item[itemName] = Math.floor(Math.random() * 100) + 1;
 cart.push(item);
 console.log(itemName + ' has been added to your cart.');
 return cart;
}

function viewCart() {
  var message = 'In your cart, you have ';

  if (cart.length === 0) {
    message = 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    var product = cart[0];
    message += Object.keys(product) + " at $" + product[Object.keys(product)] + '.';
    } else if (cart.length > 1) {
        for (var i = 0; i < cart.length; i++) {
          var item = cart[i];
          var itemName = Object.keys(item);

          if (i === cart.length - 1) {
            if (cart.length === 2) {
            var words = message.split(' ');
            var lastEle = words[words.length - 1];
            var chars = lastEle.split('');
            var newEle = chars.slice(0,chars.length - 1).join('');
            message = message.split(lastEle).join(newEle);
            message += ' and ' + itemName + " at $" + item[itemName] + '.';
            } else {
              message += ' and ' + itemName + " at $" + item[itemName] + '.';
            }
          } else {
            message += ' ' + itemName + " at $" + item[itemName] + ',';
          }
        }
      }

  return console.log(message);
}


function total() {
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemName = Object.keys(item);
    sum += item[itemName];
  }

  return sum;
}

function removeFromCart(item) {
  var newCart = {};

  for (var i = 0; i < cart.length; i++) {
    var product = cart[i];

    if (product.hasOwnProperty(item)) {
      cart.splice(i, 1);
      newCart = cart;
    }
  }

  if (Object.keys(newCart).length === 0) {
    return console.log('That item is not in your cart.');

  }

  return newCart;
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
  console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + '.');
    cart = [];
  }
}
