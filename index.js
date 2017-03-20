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

var getCart = function() {
    return cart;
};

var addToCart = function(item) {
    let price = Math.floor(Math.random() * 100);
    cart.push({
        [item]: price
    });
    console.log(`${item} has been added to your cart.`);
    return cart;
};

var viewCart = function() {
    if (!cart.length) {
        console.log('Your shopping cart is empty.');
    } else {
        let items = [];
        for (let i = 0; i < cart.length; i++) {
            let item = Object.keys(cart[i])[0];
            let price = cart[i][item];
            items.push(`${item} at \$${price}`);
        }
        console.log(`In your cart, you have ${items.join(', ')}.`);
    }
};

var removeFromCart = function(item) {
    let inCart = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            inCart = true;
            cart = cart.slice(0, i).concat(cart.slice(i + 1));
        }
    }
    if (!inCart) {
        console.log("That item is not in your cart.");
    }

    return cart;
};

var placeOrder = function(cardNumber) {
    if (!cardNumber) {
        console.log('We don\'t have a credit card on file for you to place your order.');
    }

    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);

    cart = [];
    return cart;
};
