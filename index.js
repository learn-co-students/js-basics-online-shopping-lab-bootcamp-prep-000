var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var rangen = Math.floor(Math.random(100) * Math.floor(100));
 cart.push({[item]: rangen});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
    // write your code here
    var message = "In your cart, you have ";
    if (cart.length == 0) {
        console.log("Your shopping cart is empty.");
    }
    else if (cart.length > 2) {

        for (let i = 0; i < cart.length - 1; i++) {
            var kee = Object.keys(cart[i]);
            message += (kee + " at $" + cart[i][kee] + ", ");
        }
        console.log(Object.keys(cart[cart.length - 1]));
        message += ("and " + Object.keys(cart[cart.length - 1]) + " at $" + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + ".")
        console.log(message);
    }else if (cart.length === 1){
        message += (Object.keys(cart[cart.length - 1]) + " at $" + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + ".")
        console.log(message);
    }else if (cart.length === 2){
        message += (Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and ")
        message += (Object.keys(cart[cart.length - 1]) + " at $" + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + ".");
        console.log(message);
    }
}

function total() {
    // write your code here
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
        var kee = Object.keys(cart[i]);
        sum += parseInt(cart[i][kee]);
    }
    return sum;
}

function removeFromCart(item) {
    // write your code here
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty([item])) {
            delete cart.splice(i, 1);
            console.log(cart);
            break;
        }
    }console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
