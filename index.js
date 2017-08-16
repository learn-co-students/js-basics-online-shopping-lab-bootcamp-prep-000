var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var obj = {[item] : Math.floor(100 * Math.random())};
    cart.push(obj);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    var cartList = [];
    for (var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i])[0];
        var string = `${key} at $${cart[i][key]}`;
        cartList.push(string);
    }

    if (cartList.length <= 0) {
        console.log("Your shopping cart is empty.");
    } else if (cartList.length === 1) {
        console.log(`In your cart, you have ${cartList[0]}.`);
    } else if (cartList.length === 2) {
        console.log(`In your cart, you have ${cartList[0]} and ${cartList[1]}.`);
    } else {
        var string = "";
        for (var j = 0; j < cartList.length; j++) {
            if (j < cartList.length - 1) {
                string += `${cartList[j]}, `;
            } else {
                string += `and ${cartList[j]}`;
            }
        }
        console.log(`In your cart, you have ${string}.`);
    }
}

function total() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i][Object.keys(cart[i])[0]];
    }
    return total;
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i, 1);
            return cart;
        }
    }
    console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
    if (typeof cardNumber === "undefined") {
        console.log("Sorry, we don't have a credit card on file for you.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    }
    cart = [];
}
