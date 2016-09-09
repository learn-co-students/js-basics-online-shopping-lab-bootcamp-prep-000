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
    return cart;
}

function addToCart(item) {

    var price = Math.floor(Math.random() * 100);
    cart.push({
        [item]: price
    })

    console.log(`${item} has been added to your cart.`);

    return cart;
}

function viewCart() {

    var itemsAndPrices = [];

    if (cart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        for (var i = 0; i < cart.length; i++) {
            var itemObj = cart[i];

            var names = Object.keys(itemObj);

            if (names.length > 0) {
                var name = names[0];
                var price = itemObj[name];

                itemsAndPrices.push(`${name} at \$${price}`);
            }
        }
    }

    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function removeFromCart(nameItem) {

    var isExist = false;

    for (var i = 0; i < cart.length; i++) {
        var itemObj = cart[i];

        if (itemObj.hasOwnProperty(nameItem)) {
            //number of elements to remove = 1

            cart.splice(i, 1);
            isExist = true;
        }
    }

    if (!isExist) {
      console.log("That item is not in your cart.");
    }

    return cart;
}

function placeOrder(cardNumber) {

  //undefined = false
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }

   //empty the cart array.
   cart = [];
}
