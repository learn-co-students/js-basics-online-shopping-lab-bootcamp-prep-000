var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100);
    cart.push({[item] : price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    var myString = "In your cart, you have"
    if(cart.length === 0 ) {
        console.log('Your shopping cart is empty.');
    }
    else {
        for(let i = 0; i < cart.length; i++) {
                for(var key in cart[i]) {
                myString += ` ${key} at $${cart[i][key]}`;
                if(cart.length === 2) {
                    if(i === 0) {
                        myString += ' and';
                    }
                    else {}
                }
                else {

                    if(i < cart.length - 2 ) {
                        myString += ',';
                    }
                    else if(i === cart.length - 2) {
                        myString += ', and';
                    }
                    else {}
                }
            }
        }
        myString += '.';
        console.log(myString);
    }
}

function total() {
    var price = 0;
    for(let i = 0; i < cart.length; i++) {
        for(var key in cart[i]) {
            price += cart[i][key];
        }
    }
    return price;
}

function removeFromCart(item) {

    for(let i = 0; i < cart.length; i++) {
        for(var key in cart[i]) {
            if(item === key) {
                cart.splice(i, 1);
                console.log('removed');
                return cart;
            }
        }
    }
    console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
    if(cardNumber === undefined) {
        console.log('Sorry, we don\'t have a credit card on file for you.');
    }
    else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
}
