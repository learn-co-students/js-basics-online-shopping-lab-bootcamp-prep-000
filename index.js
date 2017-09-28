var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor((Math.random() * 100) + 1);
var itemObject = {};
itemObject[item] = itemPrice;
cart.push(itemObject);
console.log(item + " has been added to your cart.");
return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else {
    var items = [];
    for (var i=0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item]);
      }
    }
  }
  if (cart.length === 1) {
    return console.log("In your cart, you have " + items + ".");
  }
else if (cart.length === 2) {
    return console.log("In your cart, you have " + items.join(" and ") + ".");
}
else if (cart.length > 2) {
var slicedArray = items.slice(0, items.length-1);
var lastArray = items.slice(-1);
  return console.log("In your cart, you have " + slicedArray.join(", ") + ", and " + lastArray + ".");
}
}

function total() {
  // write your code here
let t = 0;

for (var i = 0, l = cart.length; i < l; i++) {
   for (var item in cart[i]) {
     t += cart[i][item]
   }
 }
 return t;
}

function removeFromCart(item) {
item = [];
  let itemInCart = false;
for (let i = 0, l = cart.length; i < l; i++) {
  if (cart[i].hasOwnProperty(item)) {
    itemInCart = true;
      var ncart = cart.slice(0, i).concat(cart.slice(i + 1));
return ncart
    }


}
  if (!itemInCart) {
     console.log("That item is not in your cart.")
   }

}

function placeOrder(cardNumber) {
  // write your code here
if (!cardNumber) {
  return console.log("Sorry, we don't have a credit card on file for you.");
}
  else {
     console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
     return cart = [];
  }
}
