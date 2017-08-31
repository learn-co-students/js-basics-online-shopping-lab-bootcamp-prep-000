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
 var itemName = item;
 var itemPrice = Math.ceil(Math.random()*100);
 var obj = new Object();
 obj[itemName] = itemPrice;
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

addToCart('apples');
addToCart('bananas');
addToCart('mangos');
addToCart('pears');

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }

  else {
    var item = cart[0];
    var key = Object.keys(item)[0];
    var value = item[Object.keys(item)[0]];
    var line = `In your cart, you have ${key} at $${value}`;

    if (cart.length == 1) {
      line = line + `.`;
    }

    if (cart.length == 2) {
      item = cart[1];
      key = Object.keys(item)[0];
      value = item[Object.keys(item)[0]];
      line = line + ` and ${key} at $${value}.`
    }

    if (cart.length > 2) {
      for (var i = 1; i < (cart.length - 1); i++) {
        item = cart[i];
        key = Object.keys(item)[0];
        value = item[Object.keys(item)[0]];
        line = line + `, ${key} at $${value}`;
      }
      item = cart[(cart.length - 1)];
      key = Object.keys(item)[0];
      value = item[Object.keys(item)[0]];
      line = line + `, and ${key} at $${value}.`
    }
    console.log(line);
  }
}

viewCart();

function total() {
  // write your code here
  var total = 0;
  var item;
  var value;
  for (var i = 0; i < cart.length; i++) {
    item = cart[i];
    value = item[Object.keys(item)[0]];
    total = total + value;
  }

  return total;
}
console.log(total());


function removeFromCart(item) {
  // write your code here
  var n = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)];
    }
  }
  if (n == cart.length) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }

}
