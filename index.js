var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var stringArr = [];
    for (var i = 0; i < cart.length; i++) {
      var object = cart[i]
      var itemName = Object.keys(object)[0]
      var itemPrice = object[itemName]
      stringArr.push(`${itemName} at $${itemPrice}`)
    }
    var joinedString = stringArr.join(', ');
    console.log(`In your cart, you have ${joinedString}.`)
  } else {
    console.log('Your shopping cart is empty.');
  }
}

// function viewCart() {
//   if (cart.length > 0) {
//     var stringArr = [];
//     for (var i = 0; i < cart.length; i++) {
//         var itemObject = cart[i]
//         var item = Object.keys(itemObject)[0]
//         var price = itemObject[item]
//         str.push(`${item} at $${price}`)
//       }
//       var new_str = str.join(", ");
//       console.log(`In your cart, you have ${new_str}.`)
//   } else {
//     console.log("Your shopping cart is empty.");
//   }
// }

function removeFromCart(thing) {
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(thing)) {
      cart.splice(cart[i],1)
    }
    return cart;
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
