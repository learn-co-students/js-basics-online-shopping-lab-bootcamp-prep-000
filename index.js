var cart = [];
//var cart = [{iphone: 50}, {xbox: 200}]
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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() *101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var newCart = [];
  if (cart.length > 0) {
    for (var index in cart) {
      var itemObject = cart[index]; // {iphone: 50}
      var itemKey = Object.keys(itemObject) // iphone
      var itemPrice = itemObject[itemKey] // 50
      newCart.push(`${itemKey} at $${itemPrice}`);
    }
  }
  else {
    console.log("Your shopping cart is empty.");
  }
var newCart1 = newCart.join(', ')
console.log(`In your cart, you have ${newCart1}.`);
}

function removeFromCart(name) {
    for (var name in cart) {
      if (cart.hasOwnProperty(name)) {
        cart.shift();
      }
    }
    console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  var cart = [];
}
//viewCart()
