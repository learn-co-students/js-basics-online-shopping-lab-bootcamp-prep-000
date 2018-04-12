//

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {[item]: Math.floor(Math.random() * 100) + 1};
  console.log(`${item} has been added to your cart.`);
  cart.push(itemObj);
  return cart;
}

// More grammatically correct addToCart()
//
// function addToCart(item) {
//   var capItem = item.slice(0, 1).toUpperCase() + item.slice(1);
//   var itemObject = {[item]: Math.floor(Math.random() * 100) + 1};
//   var verb = capItem.slice(-1).toLowerCase() === 's' ? 'have' : 'has';
//   console.log(`${capItem} ${verb} been added to your cart.`);
//   cart.push(itemObject);
//   return cart;
// }


function viewCart() {
  if (cart.length < 1) console.log('Your shopping cart is empty.');
  var itemArr = cart.map(itemObj => {
    return `${Object.keys(itemObj)} at \$${Object.values(itemObj)}`;
  });
  var lastItem = itemArr.length - 1;
  itemArr[lastItem] += '.';

  if (cart.length > 1) {
    itemArr[lastItem] = 'and ' + itemArr[lastItem];
  }
  if (cart.length <= 2) {
    var whatYouHave = itemArr.join(' ');
  } else {
    whatYouHave = itemArr.join(', ');
  }

  console.log(`In your cart, you have ${whatYouHave}`);
}

function total() {
  return [].concat.apply([], cart.map((obj) => Object.values(obj)))
    .reduce((total, current) => total += current);
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
    }

    console.log('That item is not in your cart.');
    return cart;

}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
}
