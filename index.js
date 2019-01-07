var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 cart.push({[item]:itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart

}

function viewCart() {
  if (cart.length === 0) {
 console.log('Your shopping cart is empty.');
} else if (cart.length <= 2) {
  var newArray = [];
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item];
    newArray.push(`${item} at $${itemPrice}`)
  }
  console.log(`In your cart, you have ${newArray.join(" and ")}.`);
} else {
  var newArray = [];
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item];
    newArray.push(`${item} at $${itemPrice}`)
  }
  var last = newArray.pop();
    console.log(`In your cart, you have ${newArray.join(", ")}, and ${last}.`);
}
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var itemPrice = (cart[i][item]);
    sum += parseInt(itemPrice);
  }
  return sum;
}

function removeFromCart(item) {
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      newCart.push(item);
      i--;
    }
  }
  if (newCart.length === 0){
    console.log('That item is not in your cart.')
  }
  return cart;
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = [];
}
return cart;
}
