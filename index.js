var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)+1;
 var item_object = {};
 item_object[item] = price;
 cart.push(item_object);
 console.log(item + "has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0 ) {
    console.log("Your shopping cart is empty.");
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      if (i == 0) {
        items.push(item + " at $" + cart[0][item] + "." );
      } else if (i == 1) {
        items.push(item + " at $" + cart[0][item] + " and " + item + " at $" + cart[1][item] + ".");
      } else {
      items.push(item + " at $" + cart[i][item] + ".");
      }
    }
  }
console.log("In your cart, you have " + items);
  //.join(",") + ".");
}

function total() {
  totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[price];
    return totalPrice;
}

function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.unshift();
    } else {
      console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
