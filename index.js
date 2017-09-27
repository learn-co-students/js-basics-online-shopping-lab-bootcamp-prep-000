var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var obj = {};

  obj[item] = Math.floor(Math.random() * 99 + 1);

  cart.push(obj);

  console.log(item + " has been added to your cart.");

  return cart;
}

function viewCart() {

  var items = cart.reduce(function (inCart, item, idx) {

    if (inCart !== "") {
      if (idx < cart.length - 1) {
        inCart += ", ";
      } else {
        inCart += ", and ";
      }
    }

    var name = Object.keys(item)[0];

    return inCart + name + " at $" + item[name];
  }, "");

  if (cart.length === 2) {
    items = items.replace(", and ", " and ");
  }

  var response = (items === "")
    ? "Your shopping cart is empty."
    : "In your cart, you have " + items + ".";

  console.log(response);
}

function total() {
  return cart.reduce(function (sum, item) {
    return sum + item[Object.keys(item)[0]];
  }, 0);
}

function removeFromCart(item) {

  var itemIdx = -1;

  cart.find(function (cartItem, idx) {
    if (Object.keys(cartItem)[0] === item) {
      itemIdx = idx;
      return true;
    }
    return false;
  });

  if (itemIdx === -1) {
    console.log("That item is not in your cart.");
    return cart;
  }

  cart.splice(itemIdx, 1);
  return cart;
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }

  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  cart = [];
}
