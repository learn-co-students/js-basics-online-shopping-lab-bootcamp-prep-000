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

/* function addToCart(item){
  var price = Math.floor(Math.random()*100+1);
  var newItem = {item: price};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
} */


function addToCart(item){
  var price = Math.floor(Math.random()*100+1);
  var newItem = {[item]: price};
  cart = [...cart, newItem];
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
} else {
var itemAtPrice = [];
for (var i = 0; i < cart.length; i++) {
var itemName = Object.keys(cart[i]);
var itemPrice = cart[i][itemName];
itemAtPrice.push(`${itemName} at $${itemPrice}`);
var shoppingCart = itemAtPrice.join(', ')
}
console.log(`In your cart, you have ${shoppingCart}.`);
}
}

/*function removeFromCart(item){
  for (var i = 0; i < cart.length; i++)
  if (cart[].hasOwnProperty(item) === true) {
    var itemIndex;
    function findObjectIndex(cart, item) {
      for (var i = 0; i < cart.length; i++) {
        if (Object.keys(cart[i])[0] == item) {
          itemIndex = i;
        }  else {
        return null;
      }
      cart.slice(itemIndex);
      } else {
    console.log('That item is not in your cart');
  }
  console.log(cart);
}
}
*/

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(creditCardNumber){
  if (creditCardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  }
}
