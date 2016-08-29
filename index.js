var cart = [];

function addToCart(item) {
    var price = Math.random(Math.floor() * 100);
    cart.push({[item]: price});
    console.log(item + ' has been added to your cart.');
    return cart;
}

function getCart() {
    return cart;
}

function viewCart() {
    if (cart.length > 0) {
        var view = [];
        cart.forEach(function(item) {
            var objKeys = Object.keys(item);
            view.push(objKeys[0] + " at $" + item[objKeys[0]]);
        });

        console.log('In your cart, you have ' + view.join(", ") + '.');
    } else {
        console.log('Your shopping cart is empty.');
    }
}

function removeFromCart(item) {
    var full = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
            full = true;
        }
    }

    if (full === false) {
        console.log("That item is not in your cart.");
    }

    return cart;
}

function placeOrder(card) {
    if (card) {
        console.log("Your total cost is $" + total() + ", which will be charged to the card " + card + "." );
    } else {
        console.log('We don\'t have a credit card on file for you to place your order.');
    }

    cart = [];
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
