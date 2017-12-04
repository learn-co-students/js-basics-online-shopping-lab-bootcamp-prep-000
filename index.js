var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var merch = new Object();
 var randPrice = Math.floor((Math.random() * 100) + 1);

 merch[item] = randPrice;

 if (cart.push(merch)) {
   console.log(`${item} has been added to your cart.`);
   return cart;
 }
}

function viewCart() {
  var statement = `In your cart, you have `

  switch (true) {
    case (cart.length === 0):
      console.log(`Your shopping cart is empty.`);
      break;
    case (cart.length === 1):
      var merchName = Object.keys(cart[0]);
      var merchPrice = cart[0][merchName];
      console.log(`In your cart, you have ${merchName} at $${merchPrice}.`)
      break;
    case (cart.length === 2):
      var merch1Name = Object.keys(cart[0]);
      var merch1Price = cart[0][merch1Name];
      var merch2Name = Object.keys(cart[1]);
      var merch2Price = cart[1][merch2Name];
      console.log(`In your cart, you have ${merch1Name} at $${merch1Price} and ${merch2Name} at $${merch2Price}.`)
      break;
    default:
      for (var i = 0; i < cart.length; i++) {
        var merchObj = cart[i];
        var merchName = Object.keys(merchObj);
        var merchPrice = merchObj[merchName];

        if ( i === (cart.length - 1)) {
          statement += `and ${merchName} at $${merchPrice}.`
        } else {
          statement += `${merchName} at $${merchPrice}, `
        }
      }

      console.log(statement);
      break;
  }
}

function total() {
  var sum = 0;

  for ( var i = 0; i < cart.length; i++) {
    var merchObj = cart[i];
    var merchName = Object.keys(merchObj);
    var merchPrice = merchObj[merchName];

    sum += merchPrice;
  }

  return sum;
}

function removeFromCart(item) {
  var newCart = []

  for (var i = 0; i < cart.length; i++) {
    var merchObj = cart[i];

    if (!merchObj.hasOwnProperty(item)) {
      newCart.push(merchObj);
    }
  }

  if (newCart.length === cart.length) {
    console.log('That item is not in your cart.')
    return cart;
  } else {
    cart = newCart;
    return newCart;
  }
}

function placeOrder(cardNumber) {
  if ( cardNumber === undefined || cardNumber === null) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
    return 0;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  setCart([]);
}
