var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
    return cart;
}

function addToCart(item) {
    //should automatically set a price for 'item' by generating a random number
    //between 0 and 100.
    //add key-value pair 'item: price' to the 'cart' array.
    //should cl '<item> has been added to your cart.'
    //look into this again-Math.random(0, 100).floor();
    const price = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    //if nothing in cart, return ' Your shopping cart is empty.'
    //should loop over every item in 'cart' to print out 'In your cart, you have [item and price pairs].'
    if(!cart.length) {
        return console.log('Your shopping cart is empty.');
    }

    const itemsAndPrices = [];

    for(let i = 0, l = cart.length; i < l; i++) {
        let itemsPrice = cart[i];
        let item = Object.keys(itemsPrice)[0];
        let price = itemsPrice[item];
        
        itemsAndPrices.push(`${item} at \$${price}`);
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);

}

function placeOrder(cardNumber) {
    //if no argument is received, function should print out 'We don't have a credit card on file for you to place your order.'
    //should print, "Your total cost is $${total()}, which will be charged to the card ${cardNumber}."
    //should empty the cart array
    if (!cardNumber) {
        return console.log("We don't have a credit card on file for you to place your order.");
    }

    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;    
} 

function removeFromCart(name) {
    //if no item in cart, should print 'That item is not in your cart.'
    //Remove object from the 'cart' array, then return the 'cart' array.
    //HINT: Check each object's key to see if it matches the parameter, then remove it if it matches. You might find hasOwnProperty to be useful.
    let itemInCart = false;
    
    for (let i = 0, l = cart.length; i < l; i++) {
        if (cart[i].hasOwnProperty(name)) {
            itemInCart = true;
            cart = cart.slice(0, i).concat(cart.slice(i + 1));
        }
    }

        if (!itemInCart) {
            console.log("That item is not in your cart.");
        }
        return cart;
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
