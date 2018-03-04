var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = {};
  item[itemName] = itemPrice;
  cart.push(item);
  console.log(itemName + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var toPrint = [];
  var l = cart.length;
  for (var i = 0; i < l; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    toPrint.push(item + " at $" + price);
  } if (l === 0) {
    console.log("Your shopping cart is empty.");
  } else if (l <= 2 ) {
    console.log("In your cart, you have " + toPrint.join(" and ") + ".");
  } else if (l >= 3 ) {
    var items = toPrint.slice(0, (toPrint.length - 1));
    console.log("In your cart, you have " + items.join(", ") + ", and " + toPrint.pop() + ".");
  } 
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
  var item = Object.keys(cart[i]);
  var price = cart[i][item];
  total += price;
  }
  return total;
} 

function removeFromCart(item) {
  for ( var i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
     cart.splice(i, 1);
     return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
