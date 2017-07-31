var cart = [];

function getCart() {
    return cart
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100);
    var product = {[item] : price};
    cart.push(product);
    console.log(item + " has been added to your cart." );
    return cart;

}

function viewCart(){

if(cart.length === 0){
    console.log("Your shopping cart is empty.");
    //return null;
} else{
var output = "In your cart, you have ";

    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];

        for (var key in product) {
            output += `${key} at $${product[key]}`;
         }

         output += (i == cart.length - 1) ? "." : ", ";
    }

    console.log(output);
  }
}

function setCart(newCart) {
    cart = newCart;
}

function total() {

    let t = 0;
    for (var i = 0, l = cart.length; i < l; i++) {
        for (var item in cart[i]) {
            t += cart[i][item]
        }
    }

    return t
}

function removeFromCart(item){
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];

        for (var key in product) {
            if (product.hasOwnProperty(item)){
             cart.splice(i,1);
             return cart;
         }

        }
    }
        console.log('That item is not in your cart.');
        return cart;

}

function placeOrder(cardNumber){
  var t = total()
  if (arguments.length === 0){
  //if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;

  }

}
