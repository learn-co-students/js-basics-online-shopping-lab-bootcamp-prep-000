var cart;

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
    // var item = [];
    var price = Math.floor(Math.random() * 100 + 2);
    cart.push({
        [item]: price
    });
    console.log(`${item} has been added to your cart`)
    return cart;
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Your shopping cart is empty.")
    } else {
        for (var i = 0; i < cart.length; i++) {
            if (i === cart.length -1) {
                console.log("In your cart, you have "+getCart +" at "+ price+"." );
            }
        }

    }
}

function removeFromCart(items) {

}

function placeOrder(cardNumber) {

}
