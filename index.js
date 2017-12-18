var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  var price = Math.floor(Math.random() * 100) + 1;
  obj[item]= price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
addToCart('eggs');

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartString = "In your cart, you have"
    cart.forEach(function(item, i){
      var length = cart.length;
      var itemName = Object.keys(item)[0];
      if (length === 1) {
        cartString += ` ${itemName} at $${item[itemName]}.`;
      } else if (length === 2) {
        if (i === 0) {
          cartString += ` ${itemName} at $${item[itemName]}`;
        } else {
          cartString += ` and ${itemName} at $${item[itemName]}.`;
        }
      } else if (length > 2) {
        if (i === 0) {
          cartString += ` ${itemName} at $${item[itemName]},`;
        } else if (i > 0 && i < cart.length - 1) {
          cartString += ` ${itemName} at $${item[itemName]},`;
        } else if (i === cart.length -1) {
          cartString += ` and ${itemName} at $${item[itemName]}.`;
        }
      }
    })
  console.log(cartString);
  }
}
viewCart();

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += parseInt(item[Object.keys(item)[0]]);
  }
  return total;
}

function removeFromCart(item) {
  var keys = [];
  var index;
  cart.forEach( function(item, i) {
    keys.push(Object.keys(item)[0]);
  })
  index = keys.indexOf(item);
  if (index === -1) {
    console.log("That item is not in your cart.");
  } else {

    cart.splice(index, (index, 1));
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
