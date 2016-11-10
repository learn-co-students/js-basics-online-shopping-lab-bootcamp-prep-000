var emptyCart = [];
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
    return cart;
}

function addToCart(item) {
    var val = Math.floor(Math.random()*100);
    var newObject = {};
    newObject[item] = val;
    cart.push(newObject);
    console.log("pizza has been added to your cart.");
    return cart;
}

function viewCart() {
    if (cart.length == 0) {
        console.log("Your shopping cart is empty.");
        return;
    }
    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];

    var text = "In your cart, you have socks at $" + socksCost + ", " +
               "puppy at $" + puppyCost + ", " +
               "iPhone at $" + iPhoneCost + ".";
    /*
    for (var i in cart) {
        for (var keyVal in i) {
            text += " " + keyVal + " at $" + keyVal[i] + ",";
        }
    }
    text = text.substring(0, text.length);
    text += '.';
    */
    console.log(text);
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

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
        }
    }
    console.log("That item is not in your cart.");
}

function placeOrder(ccNo) {
    if (ccNo == undefined) {
        console.log('We don\'t have a credit card on file for you to place your order.');
        return
    }
    console.log("Your total cost is $" + total() + ", which will be charged to the card 123.");
    cart = emptyCart;
    return;
}
