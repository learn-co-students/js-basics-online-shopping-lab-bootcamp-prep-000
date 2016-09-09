var cart = [];

function getCart() {
    return cart;
}

function addToCart(item) {
    var price = getRandomInt(0, 101);
    var cartObj = {}
    cartObj[item] = price;
    cart.push(cartObj);
    console.log(item + ' has been added to your cart.');
    return cart;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function viewCart() {
    if (cart.length > 0) {
        var cartList = 'In your cart, you have ';
        for (var i = 0, l = cart.length; i < l; i++) {
            for (var item in cart[i]) {
                cartList += `${item} at $${getCart()[i][item]}, `;
                //cartList += item + ' at' + ' $' +getCart()[i][item] +', ';
            }
        }
        //replace comma, \s*$(one or more white space chars at end of string)
        //with a period.
        cartList = cartList.replace(/,\s*$/, ".");
        console.log(cartList);
    } else {
        console.log("Your shopping cart is empty.");
    }

}

function removeFromCart(item) {
    var c = getCart();
    if (hasItem(getCart(), item)) {
        for (let i = 0, l = c.length; i < l; i++) {
            console.log(c[i]);
            var index = getCart().indexOf(c[i]);
            getCart().splice(index, 1);
            console.log(getCart());
            return getCart();
        }
    } else {
        console.log("That item is not in your cart.");
    }
}

function hasItem(c, item) {
    for (let i = 0, l = c.length; i < l; i++) {
        if (c[i].hasOwnProperty(item)) {
            return true
        }
    }

    return false
}

function placeOrder(card) {
    if (!card) {
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
        cart = [];
    }
}

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
