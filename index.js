var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var obj = { "itemName": item, "itemPrice": price, };
 cart.push(obj);
 return item + " has been added to your cart.";
}

function viewCart() {
  var str;
  if (cart.length === 0) {
      str = "Your shopping cart is empty.";
    }
  if (cart.length == 1) {
      str = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    }
  else {
    for (let i = 0; i < cart.length; i++) {
      var j = cart.length - 1;
      var name = cart[i].itemName;
      var price = cart[i].itemPrice;
      if (i === 0) {
        str = "In your cart, you have " + name + " at $" + price + ", ";
      }
      else if (i < j) {
        str += name + " at $" + price + ", ";
      }
      if (i == j) {
        str += "and " + name + " at $" + cart[i].itemPrice + ".";
      }
  }
  }
  return str;
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  let totals = total();
  if (cardNumber) {
    cart = [];
    return "Your total cost is $" + totals + ", which will be charged to the card " + cardNumber + ".";
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
